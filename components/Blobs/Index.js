import React from "react";
import Blobs from "./Blobs";
import { BlobPosition } from "./Styled";

export default function BlobBackground() {
  return (
    <>
      <BlobPosition top="6" right="10">
        <Blobs shape="circle" size="5" color="#f40058" animation="move" />
      </BlobPosition>
      <BlobPosition top="15" left="3">
        <Blobs shape="circle" size="9" color="#f40058" animation="move" blur />
      </BlobPosition>
      <BlobPosition top="13" right="1">
        <Blobs shape="circle" size="14" color="#f40058" animation="move" blur />
      </BlobPosition>
      <BlobPosition bottom="4" right="22">
        <Blobs shape="circle" size="3" color="#f40058" animation="move" />
      </BlobPosition>
      <BlobPosition bottom="10" left="15">
        <Blobs shape="circle" size="8" color="#f40058" animation="pulse" />
      </BlobPosition>
      <BlobPosition top="7" left="35">
        <Blobs shape="circle" size="3" color="#f40058" animation="move" />
      </BlobPosition>
      <BlobPosition top="12" right="30">
        <Blobs shape="circle" size="5" color="#f40058" animation="move" blur />
      </BlobPosition>{" "}
      <BlobPosition bottom="25" right="15">
        <Blobs shape="circle" size="7" color="#f40058" animation="pulse" blur />
      </BlobPosition>
    </>
  );
}
