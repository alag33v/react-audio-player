const LibrarySong = ({audioRef, songs, song, setSongs, setCurrentSong, isPlaying}) => {
  const songSelectHandler = async () => {
    await setCurrentSong(song)
    const newSong = songs.map(stateSong => {
      if (stateSong.id === song.id) {
        return {
          ...stateSong,
          active: true
        }
      } else {
        return {
          ...stateSong,
          active: false
        }
      }
    })
    setSongs(newSong)
    if (isPlaying) audioRef.current.play()
  }

  return (
    <div className={`library-song ${song.active ? 'selected' : ''}`} onClick={songSelectHandler}>
      <img src={song.cover} alt={song.name}/>
      <div className="song-description">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  )
}

export default LibrarySong