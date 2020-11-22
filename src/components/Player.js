import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPlay, faAngleLeft, faAngleRight, faPause} from '@fortawesome/free-solid-svg-icons'

const Player = ({audioRef, songs, setSongs, currentSong, setCurrentSong, songInfo, setSongInfo, isPlaying, setIsPlaying}) => {
  const getTime = (time) => {
    return Math.floor(time / 60) + ':' + ('0' + Math.floor(time % 60)).slice(-2)
  }

  const activeLibraryHandler = (nextPrev) => {
    const newSong = songs.map(song => {
      if (song.id === nextPrev.id) {
        return {
          ...song,
          active: true
        }
      } else {
        return {
          ...song,
          active: false
        }
      }
    })
    setSongs(newSong)
  }

  const playSongHandler = () => {
    if (isPlaying) {
      audioRef.current.pause()
      setIsPlaying(!isPlaying)
    } else {
      audioRef.current.play()
      setIsPlaying(!isPlaying)
    }
  }

  const dragHandler = (e) => {
    audioRef.current.currentTime = e.target.value
    setSongInfo({...songInfo, currentTime: e.target.value})
  }

  const skipTrackHandler = async (direction) => {
    let currentIndex = songs.findIndex(song => song.id === currentSong.id)
    if (direction === 'skip-forward') {
      await setCurrentSong(songs[(currentIndex + 1) % songs.length])
      activeLibraryHandler(songs[(currentIndex + 1) % songs.length])
    }
    if (direction === 'skip-back') {
      if ((currentIndex - 1) % songs.length === -1) {
        await setCurrentSong(songs[songs.length - 1])
        activeLibraryHandler(songs[songs.length - 1])
        if (isPlaying) audioRef.current.play()
        return
      }
      await setCurrentSong(songs[(currentIndex - 1) % songs.length])
      activeLibraryHandler(songs[(currentIndex - 1) % songs.length])
    }
    if (isPlaying) audioRef.current.play()
  }

  const trackAnimation = {
    transform: `translateX(${songInfo.animationPercentage}%)`
  }

  const trackColor = {
    background: `linear-gradient(to right, ${currentSong.color[0]}, ${currentSong.color[1]})`
  }

  return (
    <div className='player'>
      <div className='time-control'>
        <p>{getTime(songInfo.currentTime)}</p>
        <div className='track' style={trackColor}>
          <input type='range' onChange={dragHandler} min={0} max={songInfo.duration || 0} value={songInfo.currentTime}/>
          <div className='animate-track' style={trackAnimation}></div>
        </div>
        <p>{songInfo.duration ? getTime(songInfo.duration) : '0: 00'}</p>
      </div>
      <div className='play-control'>
        <FontAwesomeIcon className='skip-back' onClick={() => skipTrackHandler('skip-back')} icon={faAngleLeft}
                         size='2x'/>
        <FontAwesomeIcon className='play' onClick={playSongHandler} icon={isPlaying ? faPause : faPlay} size='2x'/>
        <FontAwesomeIcon className='skip-forward' onClick={() => skipTrackHandler('skip-forward')} icon={faAngleRight}
                         size='2x'/>
      </div>
    </div>
  )
}

export default Player