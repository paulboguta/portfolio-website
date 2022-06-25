import React from 'react'
import styled from 'styled-components'

const HeaderSection = (props) => {
  return (
    <Link href={props.href}><span>{props.num}</span> {props.name}</Link>
  )
  }

const Link = styled.a`
    color: var(--lightest-slate);
    text-decoration: none;
    font-size: 14px;

    &:hover {
      transition: .15s ease-in;
      color: var(--green);
    }

    & span {
        color: var(--green)
    }
`

export default HeaderSection