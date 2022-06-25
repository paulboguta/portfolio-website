import React from "react";
import { FiGithub } from "react-icons/fi";
import styled from "styled-components";
import { IconContext } from "react-icons/lib";
import {MdOutlineWebAsset} from "react-icons/md"

const Project = (props) => {
  return (
    <Wrapper>
      <img
        src="data:image/jpeg;base64,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"
        alt="Project 1 screenshot"
      />
      <WrapperTextContent>
        <span className="green-span">Featured Project</span>
        <h3>{props.projectName}</h3>
        <TextBox><p>{props.description}</p></TextBox>
        <WrapperTechUsed>
          {props.tech.map((item) => (
            <li>{item}</li>
          ))}
        </WrapperTechUsed>
        <WrapperIcons>
            <IconContext.Provider value={{className: "icons-project"}}>

            <a href={props.href}><FiGithub /></a>
            <a href={props.href}><MdOutlineWebAsset/></a>
            </IconContext.Provider>
        </WrapperIcons>
      </WrapperTextContent>
    </Wrapper>
  );
};

const Wrapper = styled.div`
    margin-top: 2rem;
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
    font-size: .9rem;
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
gap: .7rem;

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
`

export default Project;