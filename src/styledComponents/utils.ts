import { ISecondaryTitle, IStyledButton } from "../Interfaces";
import styled from "styled-components";

export const SecondaryTitle = styled.h2<ISecondaryTitle>`
  color: ${({ fontcolor }) => fontcolor};
  font-size: ${({ size }) => size};
  margin-top: ${({ top }) => top};
  font-weight: 700;
`;

export const Button = styled.button<IStyledButton>`
  width: 8rem;
  height: 3rem;
  background: ${({ bgcolor }) => bgcolor};
  color: white;
  font-weight: 700;
  border-radius: 15px;
  border: none;
  transition: background 200ms ease-in-out;
  cursor: pointer;
  margin-top: ${({ top }) => top};

  &:hover {
    color: #ffa07a;
    background: black;
    border: 2px solid #ffa07a;
  }
`;
