import React, { useState, useEffect } from "react";
import { Input, Span, Text, TypingDiv, TypingWrapper } from "./Styled";

export default function Typing(props) {
  // quote is split so each letter is an object to determine
  // whether the value input was correct in the useEffect
  const initialQuote = props.newQuote.content.split("").map((e) => {
    return { letter: e, class: null };
  });

  const [quote, setQuote] = useState(initialQuote);
  const [inputValue, setInputValue] = useState("");

  function handleChange(e) {
    setInputValue(e.target.value);
  }

  function handleRefresh() {
    props.fetchData(); // calls for the new quote
    const updatedQuote = props.newQuote.content.split("").map((e) => {
      return { letter: e, class: null };
    });
    setQuote(updatedQuote);
    setInputValue("");
  }

  // runs after handleChange is triggered
  useEffect(() => {
    let isCorrect = true;
    const inputText = inputValue.split("");

    const updatedQuote = quote.map((e, index) => {
      const currLetter = inputText[index];
      if (currLetter == null) {
        e.class = null;
        isCorrect = false;
        return e;
      } else if (currLetter === e.letter) {
        // If the current letter is correct
        e.class = "Correct";
        return e;
      } else {
        // If the current letter is incorrect
        e.class = "Incorrect";
        isCorrect = false;
        return e;
      }
    });
    setQuote(updatedQuote);
    if (isCorrect) handleRefresh(); //handle data fetch here
  }, [inputValue]);

  return (
    <TypingWrapper>
      <h1>Typing Challenge</h1>
      <TypingDiv>
        {quote.map((e, index) => {
          return (
            <Span key={index} spanClass={e.class}>
              {e.letter}
            </Span>
          );
        })}
      </TypingDiv>
      <Input
        type="text"
        name="name"
        value={inputValue}
        onChange={handleChange}
        autoFocus
        onKeyDown={(e) => {
          if (e.key === "Enter") handleRefresh(); // handle data fetch data here
        }}
      />
      <Text>Finish the quote or press enter to start again!</Text>
    </TypingWrapper>
  );
}
