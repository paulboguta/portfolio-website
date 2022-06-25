import {React} from "react";
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
  appearance: none;
  background-color: #FCFCFD;
  border-radius: 4px;
  border-width: 0;
  box-shadow: rgba(45, 35, 66, 0.4) 0 2px 4px,rgba(45, 35, 66, 0.3) 0 7px 13px -3px,#D6D6E7 0 -3px 0 inset;
  box-sizing: border-box;
  color: #36395A;
  cursor: pointer;
  display: inline-flex;
  height: 48px;
  justify-content: center;
  line-height: 1;
  padding-left: 16px;
  padding-right: 16px;
  position: relative;
  transition: box-shadow .15s,transform .15s;
  animation:scale-in-center .5s cubic-bezier(.25,.46,.45,.94) both;

  /* ----------------------------------------------
 * Generated by Animista on 2022-6-24 16:1:41
 * Licensed under FreeBSD License.
 * See http://animista.net/license for more info. 
 * w: http://animista.net, t: @cssanimista
 * ---------------------------------------------- */

@keyframes scale-in-center{0%{transform:scale(0);opacity:1}100%{transform:scale(1);opacity:1}}
  


&:focus {
  box-shadow: #D6D6E7 0 0 0 1.5px inset, rgba(45, 35, 66, 0.4) 0 2px 4px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #D6D6E7 0 -3px 0 inset;
}

&:hover {
  box-shadow: rgba(45, 35, 66, 0.4) 0 4px 8px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #D6D6E7 0 -3px 0 inset;
  transform: scale(105%)
}

&:active {
  box-shadow: #D6D6E7 0 3px 7px inset;
  transform: scale(95%);
}

  & span {
    font-family: 'Space Mono', sans-serif;
    font-size: 32px;
    font-weight: 400;
  }
`;

export default LandingPageButton;
