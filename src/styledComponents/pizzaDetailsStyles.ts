import styled from "styled-components";

export const PizzaDetailsContainer = styled.section`
  height: 90vh;
  display: grid;
  place-items: center;
`;

export const PizzaDetailsMainCard = styled.div`
  width: 90vw;
  height: 80vh;
  border-radius: 25px;
  display: flex;
  overflow: hidden;
  box-shadow: 0 0 20px 5px lightgray;
`;

export const PizzaData = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5rem;
  padding: 3rem;
`;

export const PizzaDetailsDescription = styled.p`
  font-size: 1.3rem;
  font-style: italic;
  font-weight: 300;
  line-height: 2.2rem;
  margin-top: 2rem;
  color: gray;
`;

export const PizzaDetailsPrice = styled.p`
  font-size: 4rem;
  font-weight: 300;
  color: #333333;
  text-align: center;
  position: relative;

  &:after {
    content: "plus tax";
    color: lightgray;
    font-size: 1.5rem;
    position: absolute;
    top: 0.5rem;
    padding: 0 0 0 0.5rem;
  }
`;
