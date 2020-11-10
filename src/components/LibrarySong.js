import React from "react";

const LibrarySong = ({ song, setCurrentSong }) => {
  const selectedSongHandler = () => {
    setCurrentSong(song);
  };
  return (
    <div className="library-song" onClick={selectedSongHandler}>
      <img src={song.cover} alt={song.name} />
      <div className="song-describtion">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
};

export default LibrarySong;
