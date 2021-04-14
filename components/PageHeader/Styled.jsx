import styled from "styled-components";

export const HeaderStyled = styled.header`
  padding: 0 1rem;
  height: 100px;
  margin: 0 3rem;
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
    font-size: 1.625rem;
  }
`;
