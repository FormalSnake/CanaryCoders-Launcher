import '../App.css';
import * as React from 'react';
import { Button } from '@mui/material';
import { Typography } from '@mui/material';

function GamePage(props){
    const {DownloadGame} = props;
    return(
        <div className="App-body" /*style={{
          backgroundImage: `url(${props.gameimage})`
        }}*/>
           <Typography>{props.title}</Typography>
            <div className="Blur">
              <Button variant="outlined" sx={{
                  width: 300,
                  height: 50,
                }} onClick={DownloadGame}>
                PLAY GAME
              </Button>
            </div>
        </div>
    );
}

export default GamePage;