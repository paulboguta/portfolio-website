import React from "react";
import * as Scroll from "react-scroll";
import styled from "styled-components";
import HeaderSection from "./HeaderSection";
import ButtonS from "../../Constants/ButtonS";
import Hamburger from "../../Constants/Hamburger";
import "./Header.scss";

const Header = (props) => {
  const scrollToAboutClickHandler = () => {
    Scroll.scroller.scrollTo("scrollToAboutMe", {
      duration: 1500,
      delay: 100,
      smooth: true,
    });
  };

  const scrollToWorkClickHandler = () => {
    Scroll.scroller.scrollTo("scrollToWork", {
      duration: 1500,
      delay: 100,
      smooth: true,
    });
  };

  const scrollToContactClickHandler = () => {
    Scroll.scroller.scrollTo("scrollToContact", {
      duration: 1500,
      delay: 100,
      smooth: true,
    });
  };

  return (
    <Wrapper>
      <div className="mediaqueries-desktop flex">
        <HeaderSection
          onClick={scrollToAboutClickHandler}
          num="01."
          name="About"
        />
        <HeaderSection
          onClick={scrollToWorkClickHandler}
          num="02."
          name="Work"
        />
        <HeaderSection
          onClick={scrollToContactClickHandler}
          num="03."
          name="Contact"
        />
        <ButtonS></ButtonS>
      </div>
      <div className="mediaqueries-mobile ">
        <Hamburger onClick={props.clickHandler} />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: absolute;
  top: 2rem;
  right: 1rem;
  z-index: 99;
  padding-inline: 3rem;
  animation: slide-in-bottom 0.7s 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
`;

export default Header;
