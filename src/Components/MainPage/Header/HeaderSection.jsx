import React from "react";
import styled from "styled-components";

const HeaderSection = (props) => {
  return (
    <Button onClick={props.onClick}>
      <span className="green-span">{props.num}</span> {props.name}
    </Button>
  );
};

const Button = styled.button`
  color: var(--lightest-slate);
  text-decoration: none;
  font-size: 14px;
  background-color: transparent;
  border: none;

  &:hover {
    transition: 0.15s ease-in;
    color: var(--green);
    cursor: pointer;
  }

  @media screen and (max-width: 768px) {
    padding-left: 2rem;
  }
`;

export default HeaderSection;
