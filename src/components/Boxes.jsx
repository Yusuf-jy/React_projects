import React, { useState } from 'react'
import styled from 'styled-components'
const Boxes = ({clickbutton,setClickbutton,error,setError}) => {
    const arr=[1,2,3,4,5,6]

    const numberselecterhandler=(val)=>{
      setClickbutton(val)
      setError("")
    }
 
  return (
    <Numberselector>
      <p className='color'>{error}</p>
     <div>
      {
      arr.map((val,id)=>(
        <Box onClick={()=>numberselecterhandler(val)} isselected={clickbutton===val} key={id}>{val}</Box>
      ))}
    </div>
    <div className='flex'><p>Select Number</p></div>
    
    </Numberselector>
  )
}

export default Boxes

const Box=styled.div`
    width: 70px;
    height: 70px;
    border: 1px solid black;
    display: flex;
   place-items: center;
    font-size: 30px;
    font-weight:600 ;
    background-color: ${(props)=>(props.isselected? "black":"white")};
    color: ${(props)=>(!props.isselected? "black":"white")};

`
const Numberselector=styled.div`

display: flex;
flex-direction: column;

div{
    display: flex;
    justify-content: center;
    gap: 24px;
}
.flex{
    display: flex;
    justify-content: end;
    margin-right:50px;
}
.flex p{
    font-size: 21px;
    font-weight: 600;
}
.color{
  color: red;
  display: flex;
  justify-content: end;
}
`