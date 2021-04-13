import styled from "styled-components";

export const SkillsHeader = styled.h2`
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
