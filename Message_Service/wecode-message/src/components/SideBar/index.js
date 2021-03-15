import React, { useState } from 'react'
import { Grid, Paper, List } from '@material-ui/core'
import SearchBar from './SearchBar'
import SideBarTitle from './SideBarTitle'
import Chats from './Chats'

import './SideBar.scss'

const SideBar = () => {
    const [selectedUser, setSelectedUser] = useState(0)

    return (
        <>
            <Grid container spacing={4}>
                <Grid item xs={12} className={'contact-title'} component={Paper} elevation={1}>
                    <SideBarTitle />
                </Grid>
                <Grid item xs={12} className={'contact-search'} component={'div'} elevation={3}>
                    <SearchBar />
                </Grid>
                <Grid item xs={12} className={'contact-body'} >
                    <List>
                        <Chats id={1} setSelectedUser={setSelectedUser} isSelected={selectedUser === 1} />
                        {/* <Chats id={2} setSelectedUser={setSelectedUser} isSelected={selectedUser === 2} />
                        <Chats id={3} setSelectedUser={setSelectedUser} isSelected={selectedUser === 3} /> */}
                    </List>
                </Grid>
            </Grid>
        </>
    )
}

export default SideBar
