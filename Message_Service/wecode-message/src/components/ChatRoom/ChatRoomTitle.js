import React from 'react'
import { List, ListItem, ListItemAvatar, Avatar, ListItemText, Typography } from '@material-ui/core'

const ChatRoomTitle = () => {
    return (
        <List>
            <ListItem alignItems="flex-start">
                <ListItemAvatar>
                    <Avatar alt="Remy Sharp" src="https://i7.pngguru.com/preview/340/946/334/avatar-user-computer-icons-software-developer-avatar-thumbnail.jpg" />
                </ListItemAvatar>
                <ListItemText
                    primary="Test Name"
                    secondary={
                        <>
                            <Typography
                                component="span"
                                variant="body2"
                                color="textPrimary"
                            >
                                Last seen:
              </Typography>
                            {' 11:30pm'}
                        </>
                    }
                />
            </ListItem>
        </List>
    )
}

export default ChatRoomTitle
