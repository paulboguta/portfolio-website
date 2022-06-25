import React from 'react'
import HeaderSection from './HeaderSection'
import Button from '../../Constants/ButtonS'
import "./Header.scss"

const Header = () => {
  return (
    <div className='header__wrapper'>
    <HeaderSection href="#" num="01." name="About"/>
    <HeaderSection href="#" num="02." name="Work"/>
    <HeaderSection href="#" num="03." name="Contact"/>
    <Button> Hey </Button>
    </div>
  )
}


export default Header