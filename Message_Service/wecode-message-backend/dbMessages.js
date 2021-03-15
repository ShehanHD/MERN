const mongoose = require('mongoose');

const msgAppSchema = mongoose.Schema({
    message: String,
    name: String,
    timeStamp: String,
    received: Boolean
})

module.exports = {
    Messages: mongoose.model('message_content', msgAppSchema)
};