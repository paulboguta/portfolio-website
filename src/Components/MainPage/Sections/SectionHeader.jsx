import React from 'react'
import GrayLine from "../../Constants/GrayLine"
import styled from 'styled-components'


const SectionHeader = (props) => {
  return (
    <Header>
    <span>{props.number}</span>
    <h3>{props.name}</h3>
    <GrayLine />
   </Header>
  )
}

const Header = styled.div`
display: flex;
justify-content: flex-start;
align-items: center;

span {
    color: var(--green);
    font-size: 1.6rem;
    font-family: var(--font-mono);
    letter-spacing: 2px;
}
`
export default SectionHeader