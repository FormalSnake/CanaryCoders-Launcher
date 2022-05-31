import "../App.css";
import * as React from "react";
import { Button } from "@mui/material";
import { Typography } from "@mui/material";
import News from "./NewsButton";

function GamePage(props) {
  const { DownloadGame } = props;
  return (
    <div
      className="App-body" /*style={{
          backgroundImage: `url(${props.gameimage})`
        }}*/
    >
      <div className="Blur">
        <Typography>{props.title}</Typography>
        <Button
          variant="outlined"
          sx={{
            width: 300,
            height: 50,
          }}
          onClick={DownloadGame}
        >
          PLAY GAME
        </Button>
      </div>
      <News content={props.RecentNews} NewsImage={props.NewsImage}></News>
    </div>
  );
}

export default GamePage;
