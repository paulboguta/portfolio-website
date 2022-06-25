import { React, useState, useEffect } from "react";

import SectionHeader from "../SectionHeader";
import Skills from "./Skills";
import styled from "styled-components";
import ButtonL from "../../../Constants/ButtonL";

const About = () => {
  const [showSkills, setShowSkills] = useState(false);
  const [skillsClicked, setSkillsClicked] = useState(false);
  const [timer, setTimer] = useState(20);

  useEffect(() => {
    let timer1 = setTimeout(() => setShowSkills(true), 20000);

    return () => {
      clearTimeout(timer1);
    };
  }, []);

  useEffect(() => {
    if (!showSkills) {
      let timer2 = setTimeout(() => {
        setTimer(timer - 1);
      }, 1000);
      return () => {
        clearTimeout(timer2);
      };
    }
  }, [timer]);

  const clickTimerHandler = (e) => {
    e.preventDefault();
    setShowSkills(true);
  }

 
  return (
    <Wrapper>
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
          {<Skills />}
        </WrapperText>
        <WrapperSkillTimer>
          {showSkills ? null : (
            <button className="timer" onClick={clickTimerHandler}>
              {timer}:00
            </button>
          )}
          {showSkills ? <ButtonL text="Skills" /> : null}
        </WrapperSkillTimer>
      </WrapperContent>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin-top: 25rem;
`;

const WrapperText = styled.div`
  width: 60%;
  p {
    margin-top: 1rem;
  }
`;

const WrapperContent = styled.div`
  display: flex;
  align-items: center;

  & button {
    margin-left: 2rem;
    animation: slide-in-bottom 1s 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  }
`;

const WrapperSkillTimer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3rem;

  .timer {
    font-family: var(--font-mono);
    color: var(--light-slate);
    letter-spacing: 2px;
    margin-left: 2rem;
    background: transparent;
    border: none;
    cursor: pointer;
    animation: color-change 1s ease-in infinite;
  }

  @keyframes color-change {
    0% {
      color: var(--light-slate)
    }
    50% {
      color: var(--green)
    }
    100% {
      color: var(--light-slate)
    }
  }
`;

export default About;
