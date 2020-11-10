import React, { useRef, useState } from "react";
//import style
import "./style/app.css";
//adding components
import Player from "./components/Player";
import Song from "./components/Song";
import Library from "./components/Library";
//import util
import data from "./util";

function App() {
  const audioRef = useRef(null);
  //State
  const [song, setSong] = useState(data());
  const [currentSong, setCurrentSong] = useState(song[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
  });

  const timeUpdateHandler = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;
    setSongInfo({ ...songInfo, currentTime: current, duration });
  };

  return (
    <div className="App">
      <Song currentSong={currentSong} />
      <Player
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        currentSong={currentSong}
        songInfo={songInfo}
        setSongInfo={setSongInfo}
        audioRef={audioRef}
      />
      <Library
        songs={song}
        setCurrentSong={setCurrentSong}
        audioRef={audioRef}
        isPlaying={isPlaying}
        setSong={setSong}
      />
      <audio
        onTimeUpdate={timeUpdateHandler}
        onLoadedMetadata={timeUpdateHandler}
        ref={audioRef}
        src={currentSong.audio}
      ></audio>
    </div>
  );
}

export default App;
