import React from "react";
import { AboutText, ImageContainer } from "./Styled";
import Image from "next/image";
import { SectionContent, SectionHeader } from "../../styles/global";

export default function About() {
  return (
    <SectionContent>
      <div>
        <SectionHeader>About Me 🧐</SectionHeader>
        <AboutText>
          I'm a 22 year old front end developer working with React, Node.js and
          MuleSoft.
        </AboutText>
        <AboutText>
          I enjoy transforming complex problems into simple and intuitive
          solutions. I love to explore and learn new things.
        </AboutText>
        <AboutText>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud"
        </AboutText>
      </div>
      <ImageContainer>
        <Image
          src="/webdev.svg"
          alt="web dev illustration"
          width={500}
          height={375}
        />
      </ImageContainer>
    </SectionContent>
  );
}
