import React from 'react'
import { ListItem, ListItemText, Typography } from '@material-ui/core'

const Messages = (props) => {
    return (
        <ListItem button className={props.msgState ? "received" : "sent"}>
            <ListItemText
                primary={props.timeStamp}
                secondary={
                    <Typography
                        component="div"
                        variant="body2"
                        color="textPrimary"
                    >
                        {props.msg}
                    </Typography>
                }
            />
        </ListItem>
    )
}

export default Messages
