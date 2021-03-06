import Link from 'next/link';
import React from 'react'
import styled from "styled-components";

export default function Header() {
  return (
    <HeaderStyled>
      <Link href="/"><a>RYAN HARMAN</a></Link>
    </HeaderStyled>
  )
}

const HeaderStyled = styled.header`
  padding: 16px 16px;
  margin: 0 48px;
  border-bottom: 2px solid black;
  text-transform: uppercase;
  font-size: 20px;
`