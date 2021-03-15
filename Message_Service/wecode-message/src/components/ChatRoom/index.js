import React, { useEffect, useRef, useState } from 'react'
import { Grid, Paper, List } from '@material-ui/core'
import MsgBox from './MsgBox';
import Pusher from 'pusher-js';
import './ChatRoom.scss'
import ChatRoomTitle from './ChatRoomTitle';
import Messages from './Messages';

const ChatRoom = () => {
    const [messages, setMessages] = useState([]);
    const roomBody = useRef(null);

    useEffect(() => {
        getMessages();
    }, [])

    const getMessages = async () => {
        let res = await fetch('http://localhost:5555/api/messages/sync')
        let data = await res.json();
        setMessages(data);
    }

    useEffect(() => {
        const pusher = new Pusher('13795413ecdc1a8ba717', {
            cluster: 'eu'
        });

        const channel = pusher.subscribe('messages');

        channel.bind('inserted', function (data) {
            setMessages([...messages, data]);
        });

        return () => {
            channel.unbind_all();
            channel.unsubscribe();
        }
    }, [messages])

    useEffect(() => {
        roomBody.current.scrollTop = roomBody.current.scrollHeight;
    }, [messages])

    return (
        <>
            <Grid container spacing={4}>
                <Grid item xs={12} className={'chat-title'} component={Paper} elevation={1}>
                    <ChatRoomTitle />
                </Grid>
                <Grid item xs={12} className={'chat-body'} component={'div'} ref={roomBody}>
                    <List>
                        {messages.map(message =>
                            <Messages key={message._id} msg={message.message} msgState={message.received} timeStamp={message.timeStamp} />
                        )}
                    </List>
                </Grid>
                <Grid item xs={12} className={'chat-input'} component={Paper}>
                    <MsgBox />
                </Grid>
            </Grid>
        </>
    )
}

export default ChatRoom
