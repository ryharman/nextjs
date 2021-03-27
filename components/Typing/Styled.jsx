import styled from "styled-components";

export const Input = styled.input`
  border: none;
  border-bottom: 2px solid #fff;
  padding: 8px;
  transition: all 0.15s ease;
  width: 500px;
  background-color: #000;
  color: white;

  :focus {
    outline: none;
    border-bottom: 2px solid#07f;
  }
`;

export const TypingWrapper = styled.div`
  height: calc(100vh - 57px);
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fff;
`;

export const Span = styled.span`
  color: ${(props) =>
    props.spanClass === null
      ? "white"
      : props.spanClass === "Correct"
      ? "green"
      : "red"};
  transition: all 0.2s ease;
`;

export const Text = styled.p`
  font-size: 14px;
  font-style: italic;
`;

export const TypingDiv = styled.div`
  margin: 40px 0;
  max-width: 750px;
`;
