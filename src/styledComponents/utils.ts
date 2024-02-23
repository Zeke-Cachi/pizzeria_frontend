import { ISecondaryTitle, IStyledButton } from "../Interfaces";
import styled, { keyframes } from "styled-components";
import { FaShoppingCart } from "react-icons/fa";

export const SecondaryTitle = styled.h2<ISecondaryTitle>`
  color: ${({ fontcolor }) => fontcolor};
  font-size: ${({ size }) => size};
  margin-top: ${({ top }) => top};
  font-weight: 700;
`;

export const Button = styled.button<IStyledButton>`
  width: ${({ buttonwidth }) => (buttonwidth ? buttonwidth : `8rem`)};
  height: ${({ buttonheight }) => (buttonheight ? buttonheight : `3rem`)};
  background: ${({ bgcolor }) => bgcolor};
  font-size: ${({ buttonfontsize }) =>
    buttonfontsize ? buttonfontsize : `auto`};
  color: white;
  font-weight: 700;
  border-radius: 15px;
  border: none;
  transition: background 200ms ease-in-out;
  cursor: pointer;
  margin: ${({ buttonmargin }) => (buttonmargin ? buttonmargin : "0")};

  &:hover {
    color: #ffa07a;
    background: black;
    border: 2px solid #ffa07a;
  }
`;

const animateCartIcon = keyframes`
  0% {
    transform: rotate(0deg);
  },
  25% {
    transform: rotate(20deg);
  },
  50% {
    transform: rotate(-20deg);
  },
  75% {
    transform: rotate(20deg);
  },
  100% {
    transform: rotate(0deg);
  }

`;

export const CartIcon = styled(FaShoppingCart)`
  color: white;
  height: 1.7rem;
  width: 1.7rem;
  cursor: pointer;

  &:hover {
    animation: ${animateCartIcon} 500ms ease-in-out;
  }
`;
