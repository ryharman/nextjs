import React from "react";
import Blobs from "./Blobs";
import { BlobsBackground, BlobsContainer } from "./Styled";

export default function BlobBackground() {
  return (
    <BlobsBackground>
      <BlobsContainer>
        <Blobs shape="circle" size="5" color="#f40058" animation="move" />
        <Blobs shape="rect" size="25" color="#f40058" animation="rotate" blur />
      </BlobsContainer>
    </BlobsBackground>
  );
}
