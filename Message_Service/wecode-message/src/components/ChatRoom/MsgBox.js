import React from 'react'
import { IconButton, FormControl, InputAdornment, OutlinedInput } from '@material-ui/core'
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import SendIcon from '@material-ui/icons/Send';

const MsgBox = () => {
    return (
        <FormControl>
            <OutlinedInput
                id="standard-adornment-password"
                type={'text'}
                placeholder={'Write your Message'}
                startAdornment={
                    <InputAdornment position="start" component={IconButton}>
                        <InsertEmoticonIcon />
                    </InputAdornment>
                }
                endAdornment={
                    <InputAdornment position="end" component={IconButton}>
                        <SendIcon className={'send-icon'} />
                    </InputAdornment>
                }
            />
        </FormControl>
    )
}

export default MsgBox
