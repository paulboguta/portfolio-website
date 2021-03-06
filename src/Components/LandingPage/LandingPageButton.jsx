import { React } from "react";
import styled from "styled-components";

const LandingPageButton = (props) => {
  return (
    <Button onClick={props.clickHandle}>
      <span>let's get started</span>
    </Button>
  );
};

const Button = styled.button`
  align-items: center;
  background-color: #fcfcfd;
  border-radius: 4px;
  box-shadow: rgba(45, 35, 66, 0.4) 0 2px 4px,
    rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #d6d6e7 0 -3px 0 inset;
  color: #36395a;
  display: inline-flex;
  height: 48px;
  justify-content: center;
  line-height: 1;
  padding-inline: 16px;
  cursor: pointer;
  transition: box-shadow 0.15s, transform 0.15s;

  @media screen and (max-width: 768px) {
    height: 60px;
  }

  @media screen and (max-width: 370px) {
    width: 80vw;
  }

  animation: scale-in-center 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;

  /* ----------------------------------------------
 * Generated by Animista on 2022-6-24 16:1:41
 * Licensed under FreeBSD License.
 * See http://animista.net/license for more info. 
 * w: http://animista.net, t: @cssanimista
 * ---------------------------------------------- */

  @keyframes scale-in-center {
    0% {
      transform: scale(0);
      opacity: 1;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }

  &:focus {
    box-shadow: #d6d6e7 0 0 0 1.5px inset, rgba(45, 35, 66, 0.4) 0 2px 4px,
      rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #d6d6e7 0 -3px 0 inset;
  }

  &:hover {
    box-shadow: rgba(45, 35, 66, 0.4) 0 4px 8px,
      rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #d6d6e7 0 -3px 0 inset;
    transform: scale(95%);
  }

  &:active {
    box-shadow: #d6d6e7 0 3px 7px inset;
    transform: scale(95%);
  }

  & span {
    font-family: "Space Mono", sans-serif;
    font-size: 32px;
    font-weight: 400;
  }
`;

export default LandingPageButton;
