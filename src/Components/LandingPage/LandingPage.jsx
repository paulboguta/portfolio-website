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
  


  window.onkeypress= e => {
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
    <>
      {isActive ? <LandingPageMe handleEvent={eventHandler}/> : null}
      {isActive ? null : <LandingPageTyping />}
      {showButton ? <LandingPageButton clickHandle={props.clickHandle}/> : null}
    </>
  )
}



export default LandingPage