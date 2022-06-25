import React from 'react'
import SectionHeader from "../SectionHeader";
import Project from './Project';
import styled from "styled-components";

const Work = () => {
  return (
    <Wrapper>
        <SectionHeader number="02." name="Projects I've Built"/>
        <Project projectName="Project Number 1" description="Here I will add 1st project description" tech={["react", "es6"]}/>
        <Project projectName="Project Number 2" description="Here I will add 2nd project description" tech={["nodejs", "react", "sass", "tailwind", "es6+"]}/>
    </Wrapper>
  )
}

const Wrapper = styled.section`
    margin-top: 5rem;
    display: flex;
    flex-direction: column;
    gap: 10rem;
`

export default Work