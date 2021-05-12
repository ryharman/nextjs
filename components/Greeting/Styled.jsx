const { default: styled } = require("styled-components");

export const GreetingContainer = styled.h1`
  height: 2rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 3rem;
`;

export const FlashyThing = styled.div`
  height: 130%;
  width: 3px;
  background: #848383;
  margin-left: 4px;
`;
