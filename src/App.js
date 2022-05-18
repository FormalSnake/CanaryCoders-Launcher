import "./App.css";
import { useState } from "react";
import { Typography } from "@mui/material";
import gamebutton_items from "./games.json";
import GameButton, { ButtonPressed } from "./GameButton";
import GamePage from "./pages/gamepage";
import AccountBox from "./Components/Account/CurrentAccount";

function App() {
  /*require('react-dom');
  window.React2 = require('react');
  console.log(window.React1 === window.React2);*/

  const [current_game, setGame] = useState(gamebutton_items[0]);

  const doClick = (i) => {
    return () => {
      let game = gamebutton_items[i];
      setGame(game);
    };
  };

  const DownloadGame = (i) => {
    return () => {
      let game = gamebutton_items[i];
      alert("Downloading " + current_game.title);
    };
  };

  return (
    <div
      className="App"
      style={{ backgroundImage: `url(${current_game.gameimage})` }}
    >
      <div className="App-header">
        <Typography>CanaryCoders Launcher</Typography>
        <AccountBox />
        {gamebutton_items.map((gamebutton_item, i) => (
          <GameButton
            key={i}
            doClick={doClick(i)}
            gamebutton_item={gamebutton_item}
            i={i}
          ></GameButton>
        ))}
      </div>

      {!!current_game && (
        <GamePage
          DownloadGame={DownloadGame()}
          title={current_game.title}
          gameimage={current_game.gameimage}
        ></GamePage>
      )}
    </div>
  );
}

export default App;
