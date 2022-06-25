import React from 'react'
import styled from 'styled-components'

const ButtonL = (props) => {
  return (
    <StyledButton>{props.text}</StyledButton>
  )
}

const StyledButton = styled.button`
    color: var(--green);
    background-color: transparent;
    border: 1px solid var(--green);
    padding: 0.8rem 2rem;
    font-family: var(--font-mono);
    
    text-decoration: none;
    border-radius: 4px;
    cursor: pointer; 
    
    &:hover {
      background-color: var(--green-tint);
    }
`

export default ButtonL