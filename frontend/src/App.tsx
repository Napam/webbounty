import { useState } from 'react'
import './App.css'
import constants from './constants'
const { harvestAuthUrl } = constants 

function App() {
  const [count, setCount] = useState(0)

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
