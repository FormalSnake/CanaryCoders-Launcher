import "./App.css";
import { useState } from "react";
import gamebutton_items from "./games.json";
import GameButton, { ButtonPressed } from "./GameButton";
import GamePage from "./pages/gamepage";
import AccountBox from "./Components/Account/CurrentAccount";
// import * as Electron from "electron";

function App() {
  /*require('react-dom');
  window.React2 = require('react');
  console.log(window.React1 === window.React2);*/
  //this creates the variable for what game you are in
  const [current_game, setGame] = useState(gamebutton_items[0]);
  //this is when you click one of the game buttons, it changes the variable
  const doClick = (i) => {
    return () => {
      let game = gamebutton_items[i];
      setGame(game);
    };
  };
  //This gives the Download popup, still needs actual funtionality
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
        <img
          src="./logo.png"
          style={{
            width: 135,
            height: 120,
            marginBottom: 1,
            marginBottom: 25,
            cursor: "pointer",
          }}
          onClick={GoToPage}
        ></img>
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
          RecentNews={current_game.RecentNews}
          NewsImage={current_game.NewsImage}
        ></GamePage>
      )}
    </div>
  );
}
function GoToPage() {
  window.Advertising.openBrowser("https://www.canarycoders.es/");
}

export default App;
