import React from "react";
import styled from "styled-components";

const GrayLine = (props) => {
  return <Line width={props.width} />;
};

const Line = styled.div`
  border: 0;
  background-color: var(--dark-slate);
  width: ${(props) => props.width};
  height: 1px;
  margin-left: 2rem;
`;

export default GrayLine;
