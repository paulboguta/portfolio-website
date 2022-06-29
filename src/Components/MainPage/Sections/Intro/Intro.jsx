import React from "react";
import styled from "styled-components";
import ButtonL from "../../../Constants/ButtonL";

const Intro = () => {
  return (
    <Wrapper>
      <span className="green-span">Hi, my name is</span>
      <h1>Pawel Boguta.</h1>
      <h2>Aspiring Frontend Developer.</h2>
      <p>
        I started learning HTML & CSS back in 2021,{"\n"}
        then I got into JavaScript and React and it{" "}
        <span className="green-span">clicked</span>!
      </p>
      <div>
        <ButtonL text="About me" />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10rem;

  span {
    letter-spacing: 2px;
  }

  p {
    letter-spacing: 0.5px;
    line-height: 1.3rem;
  }

  div {
    margin-top: 2rem;
    align-self: center;
  }
`;

export default Intro;
