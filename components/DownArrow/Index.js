import React from "react";
import { ImagePos, CentreArrow } from "./Styled";
import Image from "next/image";

export default function DownArrow() {
  return (
    <CentreArrow>
      <ImagePos>
        <Image
          className="bounce"
          src="/image.svg"
          alt="down arrow"
          width={40}
          height={40}
        />
      </ImagePos>
    </CentreArrow>
  );
}
