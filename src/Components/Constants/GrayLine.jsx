import React from 'react'
import styled from 'styled-components';

const GrayLine = () => {
  return (
    <Line />
  )
}

const Line = styled.div`
  border: 0;
  background-color: var(--dark-slate);
  width: 50%;
  height: 1px;
  margin-left: 2rem;
`;


export default GrayLine