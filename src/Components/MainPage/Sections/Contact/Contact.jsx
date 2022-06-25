import React from 'react'
import styled from 'styled-components'
import ButtonL from '../../../Constants/ButtonL'
import SectionHeader from '../SectionHeader'

const Contact = () => {
  return (
    <Wrapper>
        <span className='green-span'>What's Next?</span>
        <h1>Get In Touch</h1>
        <p>I'm currently looking for first job as jr frontend developer. Say hi!</p>
        <ButtonL text="Contact"/>
    </Wrapper>
  )
}

const Wrapper = styled.div`
    margin-top: 10rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;

    button {
        margin-top: 1rem;
    }
`

export default Contact