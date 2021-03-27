import Link from "next/link";
import React from "react";
import { HeaderStyled, NameStyled } from "./Styled";

export default function Header() {
  return (
    <HeaderStyled>
      <NameStyled>
        <Link href="/">
          <a>RYAN HARMAN</a>
        </Link>
        <p>SOFTWARE DEVELOPER</p>
      </NameStyled>
      <div>
        <Link href="/typing">
          <a>Typing Challenge</a>
        </Link>
      </div>
    </HeaderStyled>
  );
}
