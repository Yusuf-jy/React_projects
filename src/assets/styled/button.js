import styled from "styled-components"

const Button=styled.button`
  width: 200px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
 background-color: black;
  color: aliceblue;
  margin-left: 100px;
  &:hover{
    background-color: white;
    color: black;
    transition:0.2s ease-in;
  }
  
`
export default Button