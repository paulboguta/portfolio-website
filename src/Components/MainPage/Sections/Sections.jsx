import React from "react";
import Intro from "./Intro/Intro";
import About from "./About/About";
import Work from "./Work/Work";
import styled from "styled-components";

const Sections = () => {
  return (
    <Wrapper>
      <Intro />
      <About />
      <Work />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 70vw;
  display: flex;
  flex-direction: column;
  justify-content: center;

  animation: slide-in-bottom 0.7s 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
`;

export default Sections;
