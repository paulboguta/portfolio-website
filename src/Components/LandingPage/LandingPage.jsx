import {React, useState} from 'react'
import LandingPageTyping from './LandingPageTyping'
import LandingPageMe from './LandingPageMe'
import LandingPageButton from './LandingPageButton'
import styled from 'styled-components'


const LandingPage = (props) => {
  const [isActive, setIsActive] = useState(true);
  const [showButton, setShowButton] = useState(false);
 

  const eventHandler = (e) => {
    e.preventDefault();
      setIsActive(current => !current);
      buttonHandler();
  }
  


  window.onkeydown= e => {
    e.preventDefault();
    setIsActive(current => current === true ? !current : current);
    buttonHandler();
  }

  const buttonHandler = () => {
    setTimeout(() => {
      setShowButton(true)
    }, 6500);
  }

  
  
  return (
    <Background>
      {isActive ? <LandingPageMe handleEvent={eventHandler}/> : null}
      {isActive ? null : <LandingPageTyping />}
      {showButton ? <LandingPageButton clickHandle={props.clickHandle}/> : null}
    </Background>
  )
}

const Background = styled.div`
  background-color: var(--dark-navy);
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`

export default LandingPage