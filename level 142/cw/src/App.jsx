import { useState } from 'react'
import './App.css'

function App() {
  const [status, setStatus] = useState("andria")
  return(
    <div>
      <p>{status}</p>
      <button onClick={() => setStatus("luka")}>luka</button>
    </div>
  )
}

export default App
 