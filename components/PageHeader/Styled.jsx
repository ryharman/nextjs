import styled from "styled-components";

export const HeaderStyled = styled.header`
  padding: 0 16px;
  height: 100px;
  margin: 0 48px;
  text-transform: uppercase;
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    margin: 0;
  }
`;

export const NameStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;

  p {
    margin: 0;
  }

  a {
    font-size: 26px;
  }
`;
