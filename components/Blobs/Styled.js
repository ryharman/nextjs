import styled from "styled-components";

// absolute so that we can overlay it ontop of the main content
export const BlobsBackground = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`;

// goes inside the BlobsBackground div to allow for absolute
// positioning of the actual blobs
export const BlobsContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const BlobPosition = styled.div`
  position: absolute;
  display: inline-block;
  top: ${({ top }) => top + "%"};
  bottom: ${({ bottom }) => bottom + "%"};
  left: ${({ left }) => left + "%"};
  right: ${({ right }) => right + "%"};
`;
