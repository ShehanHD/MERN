import React from 'react'
import { ListItem, ListItemText, Typography } from '@material-ui/core'

const Messages = (props) => {
    return (
        <ListItem button className={props.msgState}>
            <ListItemText
                primary={"11:30 pm"}
                secondary={
                    <Typography
                        component="div"
                        variant="body2"
                        color="textPrimary"
                    >
                        HI TEST MSG
                        </Typography>
                }
            />
        </ListItem>
    )
}

export default Messages
