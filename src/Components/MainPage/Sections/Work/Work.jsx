import React from "react";
import SectionHeader from "../SectionHeader";
import ProjectMobile from "./ProjectMobile";
import Project from "./Project";
import styled from "styled-components";

const Work = () => {
  return (
    <Wrapper>
      <SectionHeader number="02." name="Projects I've Built" />
      <div className="mediaqueries-mobile ">
        <ProjectMobile
          projectName="Test Project 1"
          description="Here I will add description for test project 1"
          tech={["react", "es6"]}
        />
        <ProjectMobile
          projectName="Test Project 2"
          description="Here I will add description for test project 2"
          tech={["react", "styled components", "redux", "nodejs"]}
        />
      </div>
      <div className="mediaqueries-desktop ">
        <Project
          projectName="Test Project 1"
          description="Here I will add description for test project 1"
          tech={["react", "es6"]}
        />
        <Project
          projectName="Test Project 2"
          description="Here I will add description for test project 2"
          tech={["react", "styled components", "redux", "nodejs"]}
        />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
  gap: 6rem;

  @media screen and (max-width: 768px) {
    gap: 2rem;
  }
`;

export default Work;
