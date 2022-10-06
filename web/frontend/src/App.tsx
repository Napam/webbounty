import './App.css'
import axios from 'axios'
import constants from './constants'
import { Button } from 'primereact/button'
const { harvestAuthUrl } = constants
axios.defaults.baseURL = window.location.origin

function App() {
  return (
    <div className="App">
      <h1>Bounty</h1>
      <a href={harvestAuthUrl.toString()}>
          <Button label="Click for OAuth2"></Button>
      </a>
    </div>
  )
}

export default App
