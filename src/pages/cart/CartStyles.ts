import styled from "styled-components";
import { ICartCardImg, IsMobile } from "../../Interfaces";

export const CartCardContainer = styled.section<IsMobile>`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 1rem 0 4rem;
  background-color: #e6e6e6;
  margin-top: ${({ $ismobile }) => ($ismobile ? "6rem" : "0")};

  @media screen and (max-width: 1024px) {
    gap: 0.5rem;
  }
`;

export const CartCard = styled.div`
  width: 80%;
  height: 10rem;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  background-color: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 0 15px 10px #d0d0d0;

  @media screen and (max-width: 1024px) {
    width: 90%;
    height: auto;
    grid-template-rows: 1fr 1fr 1fr;
    grid-template-columns: 1fr 1fr;
    padding: 0.7rem;
    place-items: center;
  }
`;

export const CartTitleContainer = styled.div`
  padding: 0 0 0 2rem;

  @media screen and (max-width: 1024px) {
    margin: 0 auto;
    gap: 0.5rem;
    padding: 0;
    place-self: center;
  }
`;

export const CartCardPrice = styled.p`
  font-size: 2.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  position: relative;

  @media screen and (max-width: 1024px) {
    grid-column: span 2;
    font-size: 1.5rem;
  }
`;

export const CartAmountContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  @media screen and (max-width: 1024px) {
    grid-column: span 2;
    flex-direction: column;
  }
`;

export const CartAmountButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  @media screen and (max-width: 1024px) {
    flex-direction: row;
    gap: 1rem;
    justify-content: center;
    align-items: center;
  }
`;

export const CartCardImg = styled.div<ICartCardImg>`
  background-image: url(${({ $img }) => $img});
  background-size: cover;
  background-position: center;
  height: 100%;
  width: 100%;

  @media screen and (max-width: 1024px) {
    margin: 0 auto;
    height: 3rem;
    width: 60%;
    border-radius: 15px;
    place-self: end;
  }
`;

export const CartAmount = styled.p`
  font-size: 2.1rem;
  font-weight: 700;

  @media screen and (max-width: 1024px) {
    font-size: 1.2rem;
  }
`;

export const CartCardButton = styled.button`
  border-radius: 50%;
  height: 2rem;
  width: 2rem;
  border: none;
  background-color: #ffa07a;
  font-size: 1.5rem;
  cursor: pointer;
  transform: scale(1);
  transition: transform 100ms ease-in-out;

  &:hover {
    transform: scale(1.1);
  }

  &:active {
    background-color: black;
    color: white;
  }

  @media screen and (max-width: 1024px) {
    height: 1.5rem;
    width: 1.5rem;
    font-size: 1rem;
    -webkit-tap-highlight-color: transparent;
  }
`;

export const Total = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 3rem 0 0 0;
  gap: 3rem;

  @media screen and (max-width: 1024px) {
    margin: 0.5rem 2rem;
    flex-direction: column;
    gap: 1rem;
  }
`;
