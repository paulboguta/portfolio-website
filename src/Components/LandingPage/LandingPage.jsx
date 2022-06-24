import {React, useState} from 'react'
import styled from 'styled-components'
import LandingPageTyping from './LandingPageTyping'
import LandingPageMe from './LandingPageMe'
import LandingPageButton from './LandingPageButton'
import './LandingPage.scss'

const LandingPage = () => {
  const [isActive, setIsActive] = useState(true);
  const [showButton, setShowButton] = useState(false);
  const [clicked, setClicked] = useState(false);

  const eventHandler = (e) => {
    e.preventDefault();
      setIsActive(current => !current);
      buttonHandler();
  }
  
  window.onkeydown = e => {
    e.preventDefault();
    setIsActive(current => current === true ? !current : current);
    buttonHandler();
  }

  const buttonHandler = () => {
    setTimeout(() => {
      setShowButton(true)
    }, 10000);
  }

  const clickHandler = (e) => {
    e.preventDefault();
    setClicked(current => !current)
  }
  
  return (
    <>
      {isActive ? <LandingPageMe handleEvent={eventHandler}/> : null}
      {isActive ? null : <LandingPageTyping />}
      {showButton ? <LandingPageButton clickHandler={clickHandler}/> : null}
    </>
  )
}



export default LandingPage