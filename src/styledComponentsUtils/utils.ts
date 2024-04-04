import { ISecondaryTitle, IStyledButton, IHr } from "../Interfaces";
import styled, { keyframes } from "styled-components";
import { FaShoppingCart } from "react-icons/fa";

export const SecondaryTitle = styled.h2<ISecondaryTitle>`
  color: ${({ $fontcolor }) => $fontcolor};
  font-size: ${({ $size }) => $size};
  margin-top: ${({ $top }) => $top};
  font-weight: 700;
`;

export const Button = styled.button<IStyledButton>`
  width: ${({ $buttonwidth }) => ($buttonwidth ? $buttonwidth : `8rem`)};
  height: ${({ $buttonheight }) => ($buttonheight ? $buttonheight : `3rem`)};
  background: ${({ $bgcolor }) => $bgcolor};
  font-size: ${({ $buttonfontsize }) =>
    $buttonfontsize ? $buttonfontsize : `auto`};
  color: ${({ $fontcolor }) => ($fontcolor ? $fontcolor : "white")};
  font-weight: 700;
  border-radius: 15px;
  border: ${({ $border }) => ($border ? $border : "none")};
  transition: background 200ms ease-in-out;
  cursor: pointer;
  margin: ${({ $buttonmargin }) => ($buttonmargin ? $buttonmargin : "0")};
  -webkit-tap-highlight-color: transparent;

  &:hover {
    color: #ffa07a;
    background: black;
    border: 2px solid #ffa07a;
  }
`;

const animateCartIcon = keyframes`
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.2);
  }
`;

export const CartIcon = styled(FaShoppingCart)`
  color: white;
  height: 1.7rem;
  width: 1.7rem;
  cursor: pointer;

  &:hover {
    animation: ${animateCartIcon} 250ms forwards;
  }
`;

export const Hr = styled.hr<IHr>`
  width: ${({ $width }) => $width};
  border: 1px solid #dadada;
  margin: 0 auto;
  margin-top: 1rem;
`;

export const ErrorMsg = styled.span`
  font-weight: 700;
  color: red;
  font-size: 0.8rem;
  position: absolute;
  bottom: -1.2rem;
  left: 0;
`;

const addedAnimation = keyframes`
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: scale(2) translateY(-3rem);


  }
`;

export const AddedSign = styled.p`
  color: green;
  font-weight: bolder;
  font-size: 2rem;
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
  pointer-events: none;
  animation: ${addedAnimation} 500ms infinite;
`;
