import React, { useState } from "react";
//import style
import "./style/app.css";
//adding components
import Player from "./components/Player";
import Song from "./components/Song";
import Library from "./components/Library";
//import util
import data from "./util";

function App() {
  //State
  const [song, setSong] = useState(data());
  const [currentSong, setCurrentSong] = useState(song[0]);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="App">
      <Song currentSong={currentSong} />
      <Player
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        currentSong={currentSong}
      />
      <Library songs={song} />
    </div>
  );
}

export default App;
