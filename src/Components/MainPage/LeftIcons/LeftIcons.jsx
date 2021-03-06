import React from "react";
import styled from "styled-components";
import WhiteLine from "../../Constants/WhiteLine";
import { FiGithub } from "react-icons/fi";
import { AiOutlineLinkedin } from "react-icons/ai";
import { RiTwitterLine } from "react-icons/ri";
import { IconContext } from "react-icons";

const LeftIcons = () => {
  return (
    <Wrapper>
      <IconContext.Provider value={{ className: "icons" }}>
        <a target="_blank" href="https://github.com/paulboguta">
          <FiGithub />
        </a>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/pawe%C5%82-boguta-54a800192/"
        >
          <AiOutlineLinkedin />
        </a>
        <a target="_blank" href="https://twitter.com/pawelboguta">
          <RiTwitterLine />
        </a>
        <WhiteLine />
      </IconContext.Provider>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: fixed;
  left: 3rem;
  height: 35vh;
  bottom: 0;
  overflow: hidden;
  font-size: 1.6rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding-top: 2rem;
  gap: 1rem;
  animation: slide-in-bottom 1s 2s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;

  .icons {
    cursor: pointer;
    color: var(--lightest-slate);

    &:hover {
      transition: 0.2s ease-in;
      transform: translateY(-3px);
      color: var(--green);
    }
  }

  @media screen and (max-width: 768px) {
    left: 0.2rem;
  }
`;

export default LeftIcons;
