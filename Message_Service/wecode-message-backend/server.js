const express = require('express');
const mongoose = require('mongoose');
const Pusher = require("pusher");
const cors = require('cors');
const morgan = require('morgan');
const { Messages } = require('./dbMessages.js');

const app = express();
const PORT = 5555;

const pusher = new Pusher({
    appId: "1172403",
    key: "13795413ecdc1a8ba717",
    secret: "de3db05f800b291ac06d",
    cluster: "eu",
    useTLS: true
});

const dbPassword = "7gLh32IgsYnPxkZx";
const db_url = "mongodb+srv://wecode:" + dbPassword + "@cluster0.rlwaf.mongodb.net/msgappdb?retryWrites=true&w=majority"
mongoose.connect(db_url, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const db = mongoose.connection;

db.once('open', () => {
    const msgCollection = db.collection("message_contents");
    const changStream = msgCollection.watch();

    changStream.on('change', (change) => {
        if (change.operationType === 'insert') {
            const messageDetails = change.fullDocument;
            pusher.trigger('messages', 'inserted', {
                _id: messageDetails._id,
                name: messageDetails.name,
                message: messageDetails.message,
                timeStamp: messageDetails.timeStamp,
                received: messageDetails.received
            })
        }
    })
})

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

app.get('/', (req, res) => {
    res.status(200).send("hello");
})

app.get('/api/messages/sync', (req, res) => {
    Messages.find((err, data) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send(data);
        }
    })
})

app.post('/api/messages/new', (req, res) => {
    Messages.create(req.body, (err, data) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(201).send(data);
        }
    })
})

app.listen(PORT, () => { console.log("Listening on http://localhost:" + PORT) })