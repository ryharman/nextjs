import styled from "styled-components";

export const AboutHeader = styled.h2`
  color: #07f;
  font-size: 26px;
  position: relative;
  margin-bottom: 16px;

  @media (min-width: 768px) {
    :after {
      content: "";
      position: absolute;
      margin-left: 16px;
      top: 50%;
      width: 250px;
      height: 3px;
      background: #07f;
    }
  }
`;

export const AboutText = styled.p`
  padding: 8px 0;
  font-size: 16px;
`;

export const ImageContainer = styled.div`
  min-width: 500px;

  @media (max-width: 1024px) {
    display: none;
  }
`;
