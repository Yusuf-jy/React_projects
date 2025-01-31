import React from 'react'
import styled from 'styled-components'
import Button from '../assets/styled/button'

const Startgame = (props) => {
  return (
    
         <Container>
            <img src="./dices 1.png" alt="" />
            <div className='div1'>
              <h1>Dice Game</h1>
              <Button onClick={props.toggle}>Play Now</Button>
            </div>
         </Container>
        
  )
}

export default Startgame

const Container=styled.div`
  margin-top: 70px;
  max-width: 1180px;
  display: flex;
  align-items: center;
  gap: 130px;



.div1{
  display: flex;
  flex-direction: column;
 
  width: 400px;
}

.div1 h1{
  font-size: 80px;
}
  `;
