import React from "react";
import styled from "styled-components";
import HeaderSection from "./HeaderSection";

const MenuMobile = () => {
  return (
    <Wrapper>
      <HeaderSection href="#" num="01." name="About" />
      <HeaderSection href="#" num="02." name="Work" />
      <HeaderSection href="#" num="03." name="Contact" />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: var(--dark-slate);
  border-radius: 1rem;
  position: absolute;

  top: 4rem;
  right: 1rem;
  height: 300px;
  width: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  transition: 1s ease-in;
`;

export default MenuMobile;
