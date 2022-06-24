import {React, useState} from 'react'
import LandingPageTyping from './LandingPageTyping'
import LandingPageMe from './LandingPageMe'
import LandingPageButton from './LandingPageButton'
import './LandingPage.scss'

const LandingPage = (props) => {
  const [isActive, setIsActive] = useState(true);
  const [showButton, setShowButton] = useState(false);
 

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

  
  
  return (
    <>
      {isActive ? <LandingPageMe handleEvent={eventHandler}/> : null}
      {isActive ? null : <LandingPageTyping />}
      {showButton ? <LandingPageButton clickHandle={props.clickHandle}/> : null}
    </>
  )
}



export default LandingPage