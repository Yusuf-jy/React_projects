import React from 'react'
import styled from 'styled-components'
import DiceRoll from './DiceRoll.jsx'
import Scorebox from './Scorebox.jsx'
import Boxes from './Boxes.jsx'
import { useState } from 'react'
import Button from '../assets/styled/button.js'
import Rules from './Rules.jsx'

const Gameplay = () => {
  const [score,setScore]=useState(0)
   const [clickbutton,setClickbutton]=useState()
    const[currentDice,setCurrentDice]=useState(1)
    const [error,setError]=useState("")
    const [showrules,SetShowRules]=useState(false)

    const generate_Random=(min, max)=> {
      return Math.floor(Math.random() * (max - min) ) + min;
    }

    const ResetScore=()=>{
      setScore(0)
    }
    
    

  const roleDice=()=>{
    if(!clickbutton)
       {
        setError("You have not selected the number")
        return
      }
    
      const random_no=generate_Random(1,7)
      setCurrentDice(random_no)

      if (clickbutton===random_no)
      {
        setScore((prev)=>prev+random_no)
      }  
      else{
        setScore((prev)=>prev-2)
      }
      setClickbutton(undefined)
  }

  return (
    <Cointainer_div>
        <div className='flex_div'>
      <Scorebox value={score}/>
      <Boxes clickbutton={clickbutton} setClickbutton={setClickbutton} setError={setError} error={error}/>
      
        </div>
        <div className="flex2_div">
          <DiceRoll currentDice={currentDice} roleDice={roleDice} />
        </div>
        <div className="btn_div">
          <Button onClick={ResetScore}>Reset score</Button>
          <Button onClick={()=>SetShowRules(prev=>!prev)}> {showrules?"Hide":"Show"} Rules</Button>
          
        </div>
        { showrules && <Rules/>}
        
        
    </Cointainer_div>
    
  )
}


export default Gameplay

const Cointainer_div=styled.div`

    .flex_div{
        display: flex;
        justify-content: space-between;
        margin-right: 20px;
        margin-top: 5px;
        
    }
    .btn_div{
     
     display: flex;
     flex-direction: column;
     align-items: center;
      gap: 10px;
      
    }
    
`
 
   
