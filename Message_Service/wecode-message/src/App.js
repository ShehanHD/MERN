import React from 'react';
import SideBar from './components/SideBar'
import ChatRoom from './components/ChatRoom'
import { Container, Card, Grid, GridListTileBar, IconButton } from '@material-ui/core'

import './app.scss'

function App() {
  return (
    <>
      <Grid container>
        <Grid item md={1} lg={2} />
        <Grid item xs={12} md={10} lg={8} >
          <Grid container alignItems={"center"} spacing={4} component={Card} className={'main'}>
            <Grid item xs={4} lg={3} className={'side-bar'}>
              <SideBar />
            </Grid>
            <Grid item xs={8} lg={9} className={'chat-room'} >
              <ChatRoom />
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={1} lg={2} />
      </Grid>

    </>
  );
}

export default App;
