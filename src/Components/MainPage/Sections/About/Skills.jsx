import React from "react";
import styled from "styled-components";
import GrayLine from "../../../Constants/GrayLine";
import { AiOutlineHtml5 } from "react-icons/ai";
import { DiJavascript1, DiReact } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import {
  SiStyledcomponents,
  SiSass,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiBlockchaindotcom,
} from "react-icons/si";
import { IconContext } from "react-icons/lib";

const Skills = () => {
  return (
    <Wrapper>
      <h4 className="green-span">Skills:</h4>
      <GrayLine />
      <IconContext.Provider value={{ className: "icons-skills" }}>
        <List>
          <li>
            <AiOutlineHtml5 />
            HTML & CSS
          </li>
          <li>
            <DiJavascript1 />
            ES6+
          </li>
          <li>
            <DiReact /> React <span>+ Redux</span>
          </li>
          <li>
            <FaNodeJs /> Node.JS
          </li>
          <li>
            <SiStyledcomponents />
            Styled Components
          </li>
          <li>
            <SiSass /> Sass
          </li>
        </List>
        <h4 className="green-span">Learning / Want to learn one day</h4>
        <GrayLine />
        <List>
          <li>
            <SiTypescript />
            TypeScript
          </li>
          <li>
            <SiNextdotjs /> NextJS
          </li>
          <li>
            <SiTailwindcss /> TailwindCSS
          </li>
          <li>
            <SiBlockchaindotcom /> Blockchain/Solidity
          </li>
        </List>
      </IconContext.Provider>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  animation: slide-in-bottom 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;

  h4 {
    letter-spacing: 3px;
    margin-left: 2rem;
    margin-top: 1rem;
  }
`;

const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  color: var(--lightest-slate);
  gap: 5px;
  li {
    list-style: none;
    display: flex;
    align-items: center;
    gap: 10px;

    span {
      font-style: italic;
    }

    &:hover {
      color: var(--green);
      cursor: default;
      transition: 0.3s ease-in;
    }
  }

  .icons-skills {
    font-size: 1.3rem;
    color: var(--green-darker);
  }

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

export default Skills;
