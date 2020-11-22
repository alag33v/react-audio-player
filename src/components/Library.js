import LibrarySong from './LibrarySong'

const Library = ({audioRef, libraryStatus, songs, setSongs, setCurrentSong, isPlaying}) => {
  return (
    <div className={`library ${libraryStatus ? 'library-active' : ''}`}>
      <h2>Library</h2>
      <div className='library-songs'>
        {songs.map(song => <LibrarySong audioRef={audioRef} songs={songs} song={song} setSongs={setSongs}
                                        setCurrentSong={setCurrentSong} isPlaying={isPlaying} key={song.id}/>)}
      </div>
    </div>
  )
}

export default Library