import React from "react";

const LibrarySong = ({ song, setCurrentSong, audioRef, isPlaying }) => {
  const selectedSongHandler = () => {
    setCurrentSong(song);
    //check if the song is playing
    if (isPlaying) {
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise.then((audio) => {
          audioRef.current.play();
        });
      }
    }
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
