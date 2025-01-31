import React from 'react'
import styled from 'styled-components'

const Scorebox = ({value}) => {


  return (
    
      <ScoreContainer>
        <h1>{value}</h1>
        <p>Total Score</p>
      </ScoreContainer>
   
  )
}

export default Scorebox


const ScoreContainer=styled.div`
    width: 100px;
    height: 50px;
    place-items: center;
    display: flex;
    flex-direction: column;
  
    
   
    
 h1{
    font-size: 60px;
    font-weight: 900;
    margin-top: 0;
 }  
 p{
    margin-top: -20px;
    font-size: 20px;
    font-weight: 300;
 }
 ` 
   
