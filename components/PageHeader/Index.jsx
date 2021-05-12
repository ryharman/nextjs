import Link from "next/link";
import React from "react";
import { HeaderStyled, NameStyled } from "./Styled";

export default function PageHeader() {
  return (
    <HeaderStyled>
      <NameStyled>
        <Link href="/">
          <a>RYAN HARMAN</a>
        </Link>
      </NameStyled>
    </HeaderStyled>
  );
}
