import styled from 'styled-components'

export const Input = styled.input`
  border: none;
  border-bottom: 2px solid black;
  padding: 8px;
  transition: all 0.15s ease;
  width: 500px;
  margin-top: 25px;
  
  :focus {
    outline: none;
    border-bottom: 2px solid#07f;
  }
`

export const TypingWrapper = styled.div`
  height: 100vh;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Span = styled.span`
  color: ${props => 
    props.spanClass === null ? "black" : 
    props.spanClass === "Correct" ? "green" : "red"}
`

export const Text = styled.p`
  font-size: 14px;
  font-style: italic;
`