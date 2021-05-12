import styled, { keyframes } from "styled-components";

// create the animations for the blobs
const pulse = keyframes`
  0% {
    transform: scale(0.7);
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.7);
  }

  70% {
    transform: scale(0.9);
    box-shadow: 0 0 0 10px rgba(0, 0, 0, 0);
  }

  100% {
    transform: scale(0.7);
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
  }
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const move = keyframes`
  0% {
    transform: rotate(0) translate3d(0, 0, 0);
  }

  100% {
    transform: rotate(45deg) translate3d(15px, 15px, 0);
  }
`;

// apply the animations
export const BlobAnimation = styled.svg`
  overflow: visible;

  circle,
  rect {
    ${({ blur }) => blur && "filter: blur(2px);"}
    transform: scale(1);
    animation-name: ${({ animation }) =>
      animation === "pulse" ? pulse : animation === "move" ? move : rotate};
    animation-duration: ${({ duration, animation }) =>
      animation === "move" ? "5000ms" : duration + "s"};
    animation-iteration-count: infinite;
    animation-direction: alternate-reverse;
    transform-origin: 50% 50%;
    transform-box: fill-box;
  }
`;
