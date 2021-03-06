import React from "react";
import * as Scroll from "react-scroll";
import styled from "styled-components";
import ButtonL from "../../../Constants/ButtonL";

const Intro = () => {
  const scrollOnClickHandler = () => {
    Scroll.scroller.scrollTo("scrollToAboutMe", {
      duration: 1500,
      delay: 100,
      smooth: true,
    });
  };

  return (
    <Wrapper>
      <span className="green-span">Hi, my name is</span>
      <h1>Pawel Boguta.</h1>
      <h2>Aspiring Frontend Developer.</h2>
      <p>
        I started learning HTML & CSS back in 2021,{"\n"}
        then I got into JavaScript and React and it{" "}
        <span className="green-span">clicked</span>!
      </p>
      <div>
        <ButtonL text="About me" handleClick={scrollOnClickHandler} />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20rem;

  span {
    letter-spacing: 2px;
  }

  p {
    letter-spacing: 0.5px;
    line-height: 1.3rem;
  }

  div {
    margin-top: 6rem;
    align-self: center;
  }

  @media screen and (max-width: 768px) {
    margin-top: 10rem;

    h1 {
      font-size: 3.6rem;
    }

    h2 {
      font-size: 2rem;
      margin-bottom: 3rem;
    }
  }
`;

export default Intro;
