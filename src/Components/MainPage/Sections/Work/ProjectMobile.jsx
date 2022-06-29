import React from "react";
import GrayLine from "../../../Constants/GrayLine";
import { FiGithub } from "react-icons/fi";
import styled from "styled-components";
import { IconContext } from "react-icons/lib";
import { MdOutlineWebAsset } from "react-icons/md";

const ProjectMobile = (props) => {
  return (
    <Wrapper>
      <span className="green-span">Featured Project</span>
      <img
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARIAAAC4CAMAAAAYGZMtAAAAA1BMVEX///+nxBvIAAAASElEQVR4nO3BgQAAAADDoPlT3+AEVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB8A8WoAAHxScUAAAAAAElFTkSuQmCC"
        alt="Project 1 screenshot"
      />
      <WrapperTextContent>
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

      <GrayLine width="100%" />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 1rem;

  span {
    align-self: flex-start;
  }

  img {
    margin-left: -30px;
    width: 300px;
    height: 200px;
    align-self: flex-start;
  }

  @media screen and (max-width: 400px) {
    img {
      width: 250px;
      height: 160px;
      margin-left: -20px;
    }
  }
`;

const WrapperTextContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.5rem;

  width: 300px;
  @media screen and (max-width: 400px) {
    padding-right: 2rem;
  }
`;

const TextBox = styled.div`
  background-color: var(--lightest-navy);
  height: 140px;
  border-radius: 4px;
  width: 300px;
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

export default ProjectMobile;
