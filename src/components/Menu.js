import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faMusic} from '@fortawesome/free-solid-svg-icons'

const Menu = ({libraryStatus, setLibraryStatus}) => {
  return (
    <nav className='menu'>
      <h1>Sound</h1>
      <button onClick={() => setLibraryStatus(!libraryStatus)}>
        Library
        <FontAwesomeIcon icon={faMusic}/>
      </button>
    </nav>
  )
}

export default Menu