import React from "react";
import { FiGithub } from "react-icons/fi";
import styled from "styled-components";
import { IconContext } from "react-icons/lib";
import { MdOutlineWebAsset } from "react-icons/md";

const Project = (props) => {
  return (
    <Wrapper>
      <img
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARIAAAC4CAMAAAAYGZMtAAAAA1BMVEX///+nxBvIAAAASElEQVR4nO3BgQAAAADDoPlT3+AEVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB8A8WoAAHxScUAAAAAAElFTkSuQmCC"
        alt="Project 1 screenshot"
      />
      <WrapperTextContent>
        <span className="green-span">Featured Project</span>
        <h3>{props.projectName}</h3>
        <TextBox>
          <p>{props.description}</p>
        </TextBox>
        <WrapperTechUsed>
          {props.tech.map((item) => (
            <li>{item}</li>
          ))}
        </WrapperTechUsed>
        <WrapperIcons>
          <IconContext.Provider value={{ className: "icons-project" }}>
            <a href={props.href}>
              <FiGithub />
            </a>
            <a href={props.href}>
              <MdOutlineWebAsset />
            </a>
          </IconContext.Provider>
        </WrapperIcons>
      </WrapperTextContent>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top: 2rem;
  margin-bottom: 8rem;
  display: flex;
  gap: 3rem;

  img {
    height: 250px;
    margin-left: 5rem;
  }
`;

const WrapperTextContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.5rem;

  width: 300px;
`;

const TextBox = styled.div`
  background-color: var(--lightest-navy);
  height: 100px;
  border-radius: 4px;
  width: 400px;
  z-index: 99;
  box-shadow: 8px 8px 12px 0px rgba(0, 0, 0, 1);

  p {
    padding: 1rem;
    font-size: 0.9rem;
  }
`;

const WrapperTechUsed = styled.div`
  display: flex;
  gap: 1rem;

  li {
    list-style: none;
    color: var(--lightest-slate);
    font-family: var(--font-mono);
  }
`;

const WrapperIcons = styled.div`
  display: flex;
  gap: 0.7rem;

  .icons-project {
    font-size: 1.6rem;
    color: var(--light-slate);
    cursor: pointer;

    &:hover {
      transform: translateY(-5px);
      color: var(--green);
      transition: 0.3s ease-in;
    }
  }
`;

export default Project;
