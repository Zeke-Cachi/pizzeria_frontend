import styled, { keyframes } from "styled-components";
import { Image } from "../../Interfaces";

export const PizzaDetailsContainer = styled.section`
  height: 90%;
  display: grid;
  place-items: center;
  margin: 2rem 0;

  @media screen and (max-width: 1024px) {
    height: auto;
    place-items: initial;
    margin: 8rem 0 1rem 0;
  }
`;

export const PizzaDetailsMainCard = styled.div`
  width: 90%;
  height: 80vh;
  border-radius: 25px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  overflow: hidden;
  box-shadow: 0 0 20px 5px lightgray;

  @media screen and (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    height: auto;
    margin: 0 auto;
  }
`;

export const PizzaData = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 3rem;
  padding: 3rem;

  @media screen and (max-width: 1024px) {
    gap: 1rem;
    padding: 1rem 3rem;
  }
`;

export const PizzaDetailsDescription = styled.p`
  font-size: 1.3rem;
  font-style: italic;
  font-weight: 300;
  line-height: 2.2rem;
  margin-top: 2rem;
  color: gray;

  @media screen and (max-width: 1024px) {
    font-size: 1rem;
    line-height: 1.5rem;
  }
`;

export const PizzaDetailsPrice = styled.p`
  font-size: 4rem;
  font-weight: 300;
  color: #333333;
  text-align: center;
  position: relative;

  &:after {
    content: "(plus tax)";
    color: lightgray;
    font-size: 1.5rem;
    position: absolute;
    top: 0.5rem;
    padding: 0 0 0 0.5rem;
  }

  @media screen and (max-width: 1024px) {
    font-size: 2rem;
    text-align: start;
  }
`;

const infiniteMovement = keyframes`
  0%, 100% {
    background-position: 100% 0;
  }
  50% {
    background-position: 0 0;
  }
`;

export const PizzaImg = styled.div<Image>`
  background-image: ${({ $image }) => `url(${$image})`};
  background-size: cover;
  animation: ${infiniteMovement} 100s linear infinite;
  width: 100%;
  height: 100%;

  @media screen and (max-width: 1024px) {
    height: 10rem;
    background-size: 200%;
  }
`;

//EN CART, ARREGLAR EL TEMA DE LA ALTURA DEL HEADER
