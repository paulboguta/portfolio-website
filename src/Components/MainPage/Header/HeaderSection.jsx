import React from "react";
import styled from "styled-components";

const HeaderSection = (props) => {
  return (
    <Link href={props.href}>
      <span className="green-span">{props.num}</span> {props.name}
    </Link>
  );
};

const Link = styled.a`
  color: var(--lightest-slate);
  text-decoration: none;
  font-size: 14px;

  &:hover {
    transition: 0.15s ease-in;
    color: var(--green);
  }

  @media screen and (max-width: 768px) {
    padding-left: 2rem;
  }
`;

export default HeaderSection;
