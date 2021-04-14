import React from "react";
import {
  AboutText,
  TopLeftCorner,
  BottomRightCorner,
  ImageContainer,
} from "./Styled";
import Image from "next/image";
import { SectionContent, SectionHeader } from "../../styles/global";

export default function About() {
  return (
    <SectionContent>
      <div>
        <SectionHeader>About Me</SectionHeader>
        <AboutText>
          I'm a 22 year old fullstack developer working with Node.js and
          MuleSoft.
        </AboutText>
        <AboutText>
          I enjoy transforming complex problems into simple and intuitive
          solutions. I love to explore and learn new things. Currently, most of
          my work is in React and Node.js.
        </AboutText>
        <AboutText>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum."
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
      <TopLeftCorner />
      <BottomRightCorner />
    </SectionContent>
  );
}
