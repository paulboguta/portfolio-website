import React from 'react'
import styled from 'styled-components'
import ButtonL from "../../../Constants/ButtonL"

const Intro = () => {
  return (
    <Wrapper>
        <span>Hi, my name is</span>
        <h1>Pawel Boguta.</h1>
        <h2>Say something here</h2>
        <p>Longer paragraph here</p>
        <ButtonL text="About me" />
    </Wrapper>
  )
}

const Wrapper = styled.div`
    

    span {
        color: var(--green);
        font-family: var(--font-mono);
    }
`


export default Intro