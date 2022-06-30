import React, { useState } from "react";
import * as Scroll from "react-scroll";
import styled from "styled-components";
import HeaderSection from "./HeaderSection";

const MenuMobile = () => {
  const [menuClicked, setMenuClicked] = useState(false);

  const scrollToAboutClickHandler = () => {
    Scroll.scroller.scrollTo("scrollToAboutMe", {
      duration: 1500,
      delay: 100,
      smooth: true,
    });
    setMenuClicked((current) => !current);
  };

  const scrollToWorkClickHandler = () => {
    Scroll.scroller.scrollTo("scrollToWork", {
      duration: 1500,
      delay: 100,
      smooth: true,
    });
    setMenuClicked((current) => !current);
  };

  const scrollToContactClickHandler = () => {
    Scroll.scroller.scrollTo("scrollToContact", {
      duration: 1500,
      delay: 100,
      smooth: true,
    });
    setMenuClicked((current) => !current);
  };

  return (
    <div className="mediaqueries-mobile">
      {!menuClicked && (
        <div>
          <Wrapper>
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
          </Wrapper>
        </div>
      )}
    </div>
  );
};

const Wrapper = styled.div`
  background-color: var(--dark-slate);
  border-radius: 1rem;
  position: absolute;

  top: 6rem;
  right: 1rem;
  height: 300px;
  width: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  transition: 1s ease-in;
`;

export default MenuMobile;
