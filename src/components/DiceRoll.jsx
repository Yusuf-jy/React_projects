import React, { useState } from 'react'
import styled from 'styled-components'
const DiceRoll = ({currentDice,roleDice}) => {

    
  return (
   <DiceContainer>
    <div className='dice'onClick={roleDice}>
      <img src={`dice_${currentDice}.png`} alt="" />
      
    </div>
    <p>Click On Dice To Roll</p>
   </DiceContainer>
  )
}

export default DiceRoll

const DiceContainer=styled.div`
.dice{
display: flex;
justify-content: center;
position: relative;
margin-left: 80px;
}
p{
 display: flex;
justify-content: center; 
padding-left: 70px;
}

    
`