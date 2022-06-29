import React from "react";
import styled from "styled-components";
import WhiteLine from "../../Constants/WhiteLine";

const RightEmail = () => {
  return (
    <Wrapper>
      <span>paul.boguta@gmail.com</span>
      <WhiteLine />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: fixed;
  right: 3rem;
  bottom: 0;
  height: 40vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  cursor: pointer;
  animation: slide-in-bottom 0.5s 2.45s cubic-bezier(0.25, 0.46, 0.45, 0.94)
    both;

  & span {
    writing-mode: vertical-rl;
    text-orientation: mixed;
    color: var(--lightest-slate);
    font-family: var(--font-mono);
    font-size: 0.8rem;
    letter-spacing: 2px;

    &:hover {
      transition: 0.2s ease-in;
      transform: translateY(-3px);
      color: var(--green);
    }
  }

  @media screen and (max-width: 768px) {
    right: 0.2rem;
  }
`;

export default RightEmail;
