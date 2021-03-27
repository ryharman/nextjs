import React, { useEffect, useState } from "react";
import { FlashyThing, GreetingContainer } from "./Styled";

const greetings = [
  "Hello, my name is",
  "Helo fy enw i yw",
  "Olá meu nome é",
  "Hej mitt namn är",
  "Hola, mi nombre es",
  "Hallo ich heisse",
  "Ciao il mio nome è",
  "Bonjour, je m'appelle",
];

let sentence = 0;
let sentenceFinished = false;
let deleteSpeed = 3000;

export default function Hello() {
  const [greeting, setGreeting] = useState("H");

  useEffect(() => {
    // Deletion
    if (sentenceFinished) {
      setTimeout(() => {
        setGreeting(greeting.substring(0, greeting.length - 1));

        if (greeting.split("").length === 1) {
          sentenceFinished = false;
          if (sentence === greetings.length - 1) {
            sentence = 0;
            return;
          }
          sentence++;
          return;
        }

        deleteSpeed = 50;
      }, deleteSpeed);
      return;
    }

    // Typing
    setTimeout(() => {
      const currentSentence = greetings[sentence];
      const nextValue = currentSentence
        .substring(greeting.length, currentSentence.length)
        .split("");

      setGreeting(greeting + nextValue[0]);

      if (nextValue.length === 1) {
        sentenceFinished = true;
        deleteSpeed = 3000;
      }
    }, 100);
  }, [greeting]);

  return (
    <GreetingContainer>
      {greeting}
      <FlashyThing></FlashyThing>
    </GreetingContainer>
  );
}
