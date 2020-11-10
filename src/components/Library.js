import React from "react";
import LibrarySong from "./LibrarySong";

const Library = ({ songs, setCurrentSong, audioRef, isPlaying, setSong }) => {
  return (
    <div className="library">
      <h2>Library</h2>
      <div className="library-songs">
        {songs.map((song) => (
          <LibrarySong
            song={song}
            setCurrentSong={setCurrentSong}
            audioRef={audioRef}
            key={song.id}
            id={song.id}
            isPlaying={isPlaying}
            songs={songs}
            setSong={setSong}
          />
        ))}
      </div>
    </div>
  );
};

export default Library;
