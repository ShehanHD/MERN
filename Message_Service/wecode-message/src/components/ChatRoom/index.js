import React from 'react'
import { Grid, Paper, List } from '@material-ui/core'
import MsgBox from './MsgBox';

import './ChatRoom.scss'
import ChatRoomTitle from './ChatRoomTitle';
import Messages from './Messages';

const ChatRoom = () => {
    return (
        <>
            <Grid container spacing={4}>
                <Grid item xs={12} className={'chat-title'} component={Paper} elevation={1}>
                    <ChatRoomTitle />
                </Grid>
                <Grid item xs={12} className={'chat-body'} component={'div'}>
                    <List>
                        <Messages msgState={'recived'} />
                        <Messages msgState={'sent'} />
                        <Messages msgState={'recived'} />
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
