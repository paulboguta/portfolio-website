import React from 'react'
import styled from 'styled-components'

const Button = () => {
  return (
    <StyledButton>Resume</StyledButton>
  )
}

const StyledButton = styled.button`
    color: var(--green);
    background-color: transparent;
    border: 1px solid var(--green);
    padding: 0.6rem 1rem;
    font-family: var(--font-mono);
    text-decoration: none;
    border-radius: 4px;
    cursor: pointer; 
    
    &:hover {
      background-color: var(--green-tint);
    }
`

export default Button