import React from "react";
import "./LandingPageMe.scss";
import { AiOutlineArrowDown } from "react-icons/ai";

const LandingPageMe = (props) => {
   

  return (
    <div className="container">
      <div>
        <span>Hi! I'm Pawel</span>
      </div>
      <button onClick={props.handleEvent}>
        <AiOutlineArrowDown className="arrow"  />
      </button>
    </div>
  );
};

export default LandingPageMe;
