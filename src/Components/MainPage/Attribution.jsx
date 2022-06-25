import React from 'react'
import styled from 'styled-components'

const Attribution = () => {
  return (
    <Wrapper>
        <p>I took inspiration from <a target="_blank" href="https://brittanychiang.com/" className='green-span'>Brittany Chiang portfolio.</a></p>
        <p>Website built by Pawel Boguta</p>
    </Wrapper>
  )
}

const Wrapper = styled.div`
    text-align: center;
    margin-top: 5rem;

    p {
        font-size: .8rem;

        a {
            cursor: pointer;
            text-decoration: none;
        }
    }

`

export default Attribution