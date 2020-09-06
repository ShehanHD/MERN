import React from 'react'
import { ListItem, ListItemAvatar, Avatar, ListItemText, Typography, Divider } from '@material-ui/core'

const Chats = (props) => {
    const handleListItemClick = (e, index) => {
        props.setSelectedUser(index);
    };

    return (
        <>
            <ListItem
                alignItems="flex-start"
                button
                selected={props.isSelected}
                onClick={(e) => handleListItemClick(e, props.id)}
            >
                <ListItemAvatar>
                    <Avatar alt="Remy Sharp" src="https://i7.pngguru.com/preview/340/946/334/avatar-user-computer-icons-software-developer-avatar-thumbnail.jpg" />
                </ListItemAvatar>
                <ListItemText
                    primary="User Name"
                    secondary={
                        <>
                            <Typography
                                component="span"
                                variant="body2"
                                color="textPrimary"
                            >
                                {'Last MSG'}
                            </Typography>
                        </>
                    }
                />
            </ListItem>
            <Divider variant="inset" component="li" />
        </>
    )
}

export default Chats
