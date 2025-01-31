import { useState } from "react"
import Startgame from "./components/Startgame"
import Gameplay from "./components/Gameplay"

function App() {
  const [isGameStarted,setIsGameStarted]=useState(false)
  
  const toggle=()=>{
    setIsGameStarted((prev)=>!prev)
  }

  return (
    <>
   { isGameStarted?<Gameplay/>:<Startgame toggle={toggle}/>}
    
          </>
  )
}

export default App
