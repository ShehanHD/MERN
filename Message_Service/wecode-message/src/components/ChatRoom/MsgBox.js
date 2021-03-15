import React, { useState } from 'react'
import { IconButton, FormControl, InputAdornment, OutlinedInput } from '@material-ui/core'
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import SendIcon from '@material-ui/icons/Send';

const MsgBox = () => {
    const [input, setInput] = useState("");

    const handleInput = (e) => {
        e.preventDefault();
        setInput(e.target.value)
    }

    const handleSend = async () => {
        if (input !== "") {
            let data = {
                name: "Don",
                message: input,
                timeStamp: new Date(),
                received: false,
            }

            let res = await fetch('http://localhost:5555/api/messages/new', {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(data),
            })

            await res.status === 201 && setInput("");
        }
    }

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
                    <InputAdornment position="end" component={IconButton} onClick={handleSend}>
                        <SendIcon className={'send-icon'} />
                    </InputAdornment>
                }
                value={input}
                onInput={handleInput}
            />
        </FormControl>
    )
}

export default MsgBox
