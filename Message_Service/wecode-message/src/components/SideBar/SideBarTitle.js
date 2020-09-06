import React from 'react'
import { List, ListItem, ListItemAvatar, Avatar, ListItemSecondaryAction, IconButton } from '@material-ui/core'
import MoreVertIcon from '@material-ui/icons/MoreVert';
const SideBarTitle = () => {
    return (
        <List>
            <ListItem alignItems="flex-start">
                <ListItemAvatar>
                    <Avatar alt="Remy Sharp" src="https://i7.pngguru.com/preview/340/946/334/avatar-user-computer-icons-software-developer-avatar-thumbnail.jpg" />
                </ListItemAvatar>

                <ListItemSecondaryAction>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </ListItemSecondaryAction>
            </ListItem>
        </List>
    )
}

export default SideBarTitle
