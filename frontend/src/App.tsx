import './App.css'
import axios from 'axios'
import constants from './constants'
const { harvestAuthUrl } = constants
axios.defaults.baseURL = window.location.origin

function App() {
  return (
    <div className="App">
      <h1>Bounty</h1>
      <a 
        href={harvestAuthUrl}>
          Click for OAuth2
      </a>
    </div>
  )
}

export default App
