import React from "react";
import styled from "styled-components";
import { IconContext } from "react-icons";
import { GiHamburgerMenu } from "react-icons/gi";

const Hamburger = (props) => {
  return (
    <Button onClick={props.onClick}>
      <IconContext.Provider value={{ className: "hamburger" }}>
        <GiHamburgerMenu />
      </IconContext.Provider>
    </Button>
  );
};

const Button = styled.div`
  background: transparent;
  border: none;
`;

export default Hamburger;
