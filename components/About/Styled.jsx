import styled from "styled-components";
import { SectionContent } from "../../styles/global";

export const AboutText = styled.p`
  padding: 0.5rem 0;
  font-size: 1.2rem;
  color: #404b69;
`;

export const ImageContainer = styled.div`
  min-width: 500px;

  @media (max-width: 1024px) {
    display: none;
  }
`;

export const TopLeftCorner = styled.div`
  position: absolute;
  top: -50px;
  left: -50px;
  width: 100px;
  height: 100px;
  border-top: 3px solid #00818a;
  border-left: 3px solid #00818a;
  transition: all 0.25s;

  ${SectionContent}:hover & {
    width: 175px;
    height: 175px;
  }

  @media (max-width: 1350px) {
    display: none;
  }
`;

export const BottomRightCorner = styled.div`
  position: absolute;
  bottom: -50px;
  right: -50px;
  width: 100px;
  height: 100px;
  border-bottom: 3px solid #00818a;
  border-right: 3px solid #00818a;
  transition: all 0.25s;

  ${SectionContent}:hover & {
    width: 175px;
    height: 175px;
  }

  @media (max-width: 1350px) {
    display: none;
  }
`;
