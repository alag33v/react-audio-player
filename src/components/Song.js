const Song = ({currentSong, isPlaying}) => {
  return (
    <div className='song'>
      <img className={isPlaying ? 'rotateSong' : ''} src={currentSong.cover} alt={currentSong.name}/>
      <h3>{currentSong.name}</h3>
      <h4>{currentSong.artist}</h4>
    </div>
  )
}

export default Song