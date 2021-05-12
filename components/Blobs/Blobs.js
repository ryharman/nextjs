import React from "react";
import { BlobAnimation } from "./BlobsStyled";

export default function Blobs({ color, shape, animation, size, blur }) {
  if (shape === "circle") {
    return (
      <BlobAnimation
        height="100"
        width="100"
        duration={Math.floor(Math.random() * 15) + 10}
        animation={animation}
        blur={blur}
      >
        <circle cx="50" cy="50" r={size} fill={color} />
      </BlobAnimation>
    );
  }

  if (shape === "rect") {
    return (
      <BlobAnimation
        height="100"
        width="100"
        duration={Math.floor(Math.random() * 10)}
        animation={animation}
        blur={blur}
      >
        <rect width={size} height={size} fill={color} />
      </BlobAnimation>
    );
  }
}
