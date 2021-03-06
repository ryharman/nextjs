import React, { useState, useEffect } from 'react'
import { Input, Span, Text, TypingWrapper } from './Styled';
import { loadingState, quoteAPI } from './Utils';

export default function Typing() {
  const [inputValue, setInputValue] = useState('')
  const [quote, setQuote] = useState(loadingState)
  const [updateQuote, setUpdateQuote] = useState(false)
  
  useEffect(async () => {
    const newQuote = await quoteAPI();
    const letterAndClass = newQuote.split('').map(e => {
      return {letter: e, class: null};
    })
    setQuote(letterAndClass)
    setInputValue('')
  }, [updateQuote]) // setUpdateQuote to call on demand

  function handleChange(e) {
    setInputValue(e.target.value);
  };

  // runs after handleChange is triggered
  useEffect(() => {
    let isCorrect = true;
    const inputText = inputValue.split('');

    const updatedQuote = quote.map((e, index) => {
      const currLetter = inputText[index];
      if(currLetter == null) {
        e.class = null;
        isCorrect = false;
        return e;
      } else if(currLetter === e.letter) { 
          // If the current letter is correct
          e.class="Correct";
          return e
        } else { 
          // If the current letter is incorrect
          e.class="Incorrect";
          isCorrect = false;
          return e
        }
    })
    setQuote(updatedQuote);
    if (isCorrect) setUpdateQuote(!updateQuote);
  }, [inputValue])

  return (
    <TypingWrapper>
      <div>
        {quote.map((e, index) => {
          return <Span key={index} spanClass={e.class}>{e.letter}</Span>
        })}
      </div>
      <Input
        type="text"
        name="name"
        value={inputValue}
        onChange={handleChange}
        autoFocus
        onKeyDown={(e) => {
          if (e.key === 'Enter') setUpdateQuote(!updateQuote)
        }}
      />
      <Text>Finish the quote or press enter to start again!</Text>
    </TypingWrapper>
  )
}