import styled from "styled-components";

export const MainWrapper = styled.main`
  min-height: 75vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  line-height: 1;
  position: relative;

  & h3 {
    color: #dbedf3;
  }

  @media (max-width: 768px) {
    margin: 0 1rem;
    h1 {
      font-size: 2rem;
    }

    h3 {
      font-size: 1.75rem;
    }
  }
`;

export const SectionContent = styled.section`
  color: #000;
  padding: 0 3rem;
  margin: 0 auto;
  max-width: 1250px;
  min-height: 500px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: relative;

  @media (max-width: 1024px) {
    padding: 0 1rem;
    flex-direction: column;
  }
`;

export const SectionHeader = styled.h2`
  color: #283149;
  font-size: 3rem;
  position: relative;
  margin-bottom: 1rem;

  /* @media (min-width: 768px) {
    :after {
      content: "";
      position: absolute;
      margin-left: 1rem;
      top: 50%;
      width: 250px;
      height: 3px;
      background: #07f;
    }
  } */
`;

export const BackgroundWhite = styled.div`
  background-color: #fff;
`;

export const CentreContent = styled.div`
  margin: 0 auto;
`;

export const Name = styled.h1`
  margin-bottom: 1.5rem;
  font-size: 2.8rem;
`;
