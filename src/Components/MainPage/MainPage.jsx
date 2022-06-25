import React from 'react'
import Header from './Header/Header'
import LeftIcons from './LeftIcons/LeftIcons'
import RightEmail from './RightEmail/RightEmail'
import Sections from './Sections/Sections'
import "./MainPage.scss"

const MainPage = () => {
  return (
    <div className='main-page__wrapper'>
    <Header />
    <LeftIcons />
    <RightEmail />
    <Sections />
    </div>
  )
}

export default MainPage