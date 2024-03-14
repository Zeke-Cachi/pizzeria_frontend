import styled from "styled-components";
import { ICartCardImg } from "../../Interfaces";

export const CartCardContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 1rem 0 4rem;
  background-color: #e6e6e6;
`;

export const CartCard = styled.div`
  width: 80%;
  height: 15rem;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  background-color: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 0 15px 10px #d0d0d0;
`;

export const CartTitleContainer = styled.div`
  padding: 0 0 0 2rem;
`;

export const CartUnitPriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`;

export const CartUnitPrice = styled.p`
  font-style: italic;
  font-size: 1.5rem;
  position: relative;

  &:after {
    content: "+ tax";
    color: lightgray;
    font-size: 0.9rem;
    position: absolute;
    top: 0.5rem;
    padding: 0 0 0 0.5rem;
    width: 4rem;
  }
`;

export const CartCardPrice = styled.p`
  font-size: 2.8rem;
  display: grid;
  place-items: center;
  position: relative;

  &:after {
    content: "+ tax";
    color: lightgray;
    font-size: 1.2rem;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 6rem;
    padding: 0 0 0 0.5rem;
    width: 4rem;
`;

export const CartCardImg = styled.div<ICartCardImg>`
  background-image: url(${({ $img }) => $img});
  background-size: cover;
  background-position: center;
  height: 100%;
  width: 100%;
  grid-row: span 2;
`;

export const CartAmount = styled.p`
  font-size: 2.1rem;
  font-weight: 700;
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
`;
