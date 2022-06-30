import { React, useState } from "react";
import * as Scroll from "react-scroll";

import SectionHeader from "../SectionHeader";
import Skills from "./Skills";
import styled from "styled-components";
import ButtonL from "../../../Constants/ButtonL";

const About = () => {
  const [skillsClicked, setSkillsClicked] = useState(false);

  const clickSkillsHandler = (e) => {
    e.preventDefault();

    setSkillsClicked(true);
  };

  let Element = Scroll.Element;

  return (
    <Wrapper>
      <Element name="scrollToAboutMe" />
      <SectionHeader number="01." name="About Me" />
      <WrapperContent>
        <WrapperText>
          <p>Hello, my name is Pawel!</p>
          <p>
            My journey with coding started back in 2018 when I wrote first lines
            of Python. From then I've been jumping between various technologies,
            until I found that
            <span className="green-span"> frontend development</span> is what I
            want to do. 2021 was the year I started learning HTML & CSS. Then I
            got into JavaScript and React and it clicked!
          </p>
          <p>
            My interests include frontend development and UX/UI design. I love
            building something folks can use. My end goal is to be full stack
            dev with MERN stack, so it has just begun for me.
          </p>
          {skillsClicked && <Skills />}
        </WrapperText>
        <WrapperSkillsBtn>
          {!skillsClicked && (
            <ButtonL text="Skills" handleClick={clickSkillsHandler} />
          )}
        </WrapperSkillsBtn>
      </WrapperContent>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin-top: 25rem;

  @media screen and (max-width: 768px) {
    margin-top: 15rem;
  }
`;

const WrapperText = styled.div`
  width: 60%;
  p {
    margin-top: 1rem;
    text-align: justify;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const WrapperContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & button {
    margin-left: 2rem;
    animation: slide-in-bottom 1s 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  }

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }
`;

const WrapperSkillsBtn = styled.div`
  padding-right: 3rem;
  margin-top: 1rem;
`;

export default About;
