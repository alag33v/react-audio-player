import {useState, useRef} from 'react'
import data from './data'
import Menu from './components/Menu'
import Song from './components/Song'
import Player from './components/Player'
import Library from './components/Library'
import './styles/app.scss'

const App = () => {
  const [libraryStatus, setLibraryStatus] = useState(false)
  const [songs, setSongs] = useState(data())
  const [currentSong, setCurrentSong] = useState(songs[0])
  const [isPlaying, setIsPlaying] = useState(false)
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
    animationPercentage: 0
  })
  const audioRef = useRef(null)

  const timeUpdateHandler = (e) => {
    const current = e.target.currentTime
    const duration = e.target.duration
    const roundedCurrent = Math.round(current)
    const roundedDuration = Math.round(duration)
    const animationPercentage = Math.round((roundedCurrent / roundedDuration) * 100)
    setSongInfo({...songInfo, currentTime: current, duration, animationPercentage})
  }

  const songEndHandler = async () => {
    let currentIndex = songs.findIndex(song => song.id === currentSong.id)
    await setCurrentSong(songs[(currentIndex + 1) % songs.length])
    if (isPlaying) audioRef.current.play()
  }

  return (
    <div className={`app ${libraryStatus  ? 'app-active' : ''}`}>
      <Menu libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus}/>
      <Song currentSong={currentSong} isPlaying={isPlaying}/>
      <Player audioRef={audioRef} songs={songs} setSongs={setSongs} currentSong={currentSong}
              setCurrentSong={setCurrentSong} songInfo={songInfo} setSongInfo={setSongInfo} isPlaying={isPlaying}
              setIsPlaying={setIsPlaying}/>
      <Library audioRef={audioRef} libraryStatus={libraryStatus} songs={songs} setSongs={setSongs}
               setCurrentSong={setCurrentSong} isPlaying={isPlaying}/>
      <audio src={currentSong.audio} ref={audioRef} onTimeUpdate={timeUpdateHandler}
             onLoadedMetadata={timeUpdateHandler} onEnded={songEndHandler}></audio>
    </div>
  )
}

export default App;