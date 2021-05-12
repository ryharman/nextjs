import styled from "styled-components";

export const WavesWrapper = styled.div`
  height: 344px;
  position: relative;
`;

export const WavesPosition = styled.div`
  position: absolute;
  bottom: -5px;
  width: 100%;
`;

export const ArrowWrapper = styled.div`
  position: absolute;
  bottom: 100px;
  height: 100px;
  width: 100%;
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Arrow = styled.div`
  border: solid black;
  border-width: 0 6px 6px 0;
  display: inline-block;
  padding: 10px;
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
  transition: all 0.2s;

  ${ArrowWrapper}:hover & {
    border: solid #00818a;
    border-width: 0 6px 6px 0;
  }
`;
