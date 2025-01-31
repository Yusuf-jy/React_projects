import React from 'react'
import styled from 'styled-components'

const Rules = () => {
  return (
    <RulesDiv>
      <div className="rule_div">

      <h2>How To Play Dice Game</h2>
      <p>Select any Number</p>
      <p>Click On The Dice Image</p>
      <p>After Click On Dice If Selected Number Is Equal To Dice You Will Get Same Points As Dice</p>
      <p>If You Get Wrong Guess 2 points Will Be Deducted</p>
   
    </div>    
    </RulesDiv>
  )
}

export default Rules

const RulesDiv=styled.div`
display: flex;
justify-content: center;
margin-top: 30px;

.rule_div{
    background-color: #f3d1e3;

    p{
        font-size: 15px;
        font-weight: 500;
    }
    }
`
