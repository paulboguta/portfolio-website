import React from "react";
import styled from "styled-components";
import ButtonL from "../../../Constants/ButtonL";
import SectionHeader from "../SectionHeader";
import { Element } from "react-scroll";

const Contact = () => {
  return (
    <Wrapper>
      <Element name="scrollToContact" />
      <span className="green-span">What's Next?</span>
      <h1>Get In Touch</h1>
      <p>
        I'm currently looking for a first job as jr. frontend developer. Say hi!
      </p>
      <a target="_blank" href="mailto:paul.boguta@gmail.com">
        <ButtonL text="Contact" />
      </a>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  button {
    margin-top: 1rem;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    text-align: center;
    & h1 {
      font-size: 2.4rem;
    }
  }
`;

export default Contact;
