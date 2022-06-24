import {React, useState} from 'react'
import LandingPage from '../LandingPage/LandingPage'
import About from '../AboutPage/About'
import './UI.scss'

const UI = () => {
    const [clicked, setClicked] = useState(false)

    const clickHandler = (e) => {
      e.preventDefault();
      setClicked(current => !current)
      console.log("click!")
    }   
    
    return (
    <> 
        {clicked ? null : <LandingPage clickHandle={clickHandler}/>}
        {clicked ? <About /> : null}
      </>
  )
}

export default UI