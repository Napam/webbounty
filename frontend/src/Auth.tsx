import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import './App.css'
import 'primeicons/primeicons.css'
import axios from 'axios'
import Base64Url from './base64url'

function App() {
  const [status, setStatus] = useState("")
  const location = useLocation()
  const code = new URLSearchParams(location.search).get('code')
  const harvestID = new URLSearchParams(location.search).get('scope')?.split(':')[1]

  if (code == null || harvestID == null) {
    throw new Error('There are missing values in the URL for the either code or harvestID')
  }

  useEffect(() => {
    (async () => {
      setStatus("pi-spin pi-spinner");; 
      try {
        const config = {
          headers: {
            "Authorization": `Basic ${Base64Url.encode(code + ":" + harvestID)}`
          }
        }
        await axios.get("/api/oauth2client", config)
        console.log("Succesfully authenticated")
      } catch (error) {
        console.error("Something went wrong when trying to authenticate: ", error)
        setStatus("pi-times")
        return
      }
      setStatus("pi-check")
    })()

    return () => { }
  }, [])

  return (
    <div className="App">
      <div className="horizontal">
        <h1>
          <span style={{ 'marginRight': '24px' }}>Authenticating</span>
          <i className={"pi " + status} style={{ 'fontSize': '0.75em' }}></i>
        </h1>
      </div>
    </div>
  )
}

export default App
