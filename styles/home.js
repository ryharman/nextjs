import styled from "styled-components";

export const BackgroundOverwrite = styled.div`
  background-color: black;
`;

export const MainWrapper = styled.main`
  margin: 0 500px;
  min-height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  line-height: 1;
  background: black;

  & h3 {
    color: #848383;
  }
`;

export const Name = styled.h1`
  margin-bottom: 16px;
`;
