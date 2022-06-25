import React from 'react'
import styled from 'styled-components'

const WhiteLine = () => {
  return (
    <Line />
  )
}

const Line = styled.div`
  border: 0.5px solid var(--white);
  height: 12vh;
  position: fixed;
  bottom: 0;
  width: 0.5px;
`;

export default WhiteLine