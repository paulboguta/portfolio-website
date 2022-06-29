import React, { useState } from "react";
import HeaderSection from "./HeaderSection";
import ButtonS from "../../Constants/ButtonS";
import MenuMobile from "./MenuMobile";
import Hamburger from "../../Constants/Hamburger";
import "./Header.scss";

const Header = (props) => {
  return (
    <React.Fragment>
      <div className="header__wrapper mediaqueries-desktop">
        <HeaderSection href="#" num="01." name="About" />
        <HeaderSection href="#" num="02." name="Work" />
        <HeaderSection href="#" num="03." name="Contact" />
        <ButtonS></ButtonS>
      </div>

      <div className="mediaqueries-mobile ">
        <Hamburger onClick={props.clickHandler} />
      </div>
    </React.Fragment>
  );
};

export default Header;
