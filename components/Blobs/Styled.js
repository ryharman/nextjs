import styled from "styled-components";

export const BlobPosition = styled.div`
  position: absolute;
  display: inline-block;
  top: ${({ top }) => top + "%"};
  bottom: ${({ bottom }) => bottom + "%"};
  left: ${({ left }) => left + "%"};
  right: ${({ right }) => right + "%"};
`;
