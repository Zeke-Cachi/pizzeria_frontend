import styled from "styled-components";

export const MainPizzaOptionsCardContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 4rem;
  padding: 0 1rem;
`;

export const MainPizzaPresentationCard = styled.div`
  width: 25rem;
  height: 20rem;
  background: #e6e6e6;
  position: relative;
  border-radius: 15px;
  overflow: hidden;
`;

export const MainPizzaPresentationCardImg = styled.img`
  width: 24rem;
  transform: translateX(-0.7rem) rotate(20deg);
  position: absolute;
  right: 0;
  top: 0;
  z-index: 10;
`;

export const MainPizzaPresentationCardLower = styled.div`
  padding-top: 2rem;
  height: 50%;
  width: 100%;
  background: black;
  color: white;
  font-weight: 700;
  font-size: 2.2rem;
  position: absolute;
  bottom: 0;
  z-index: 0;
  display: grid;
  place-items: center;
  border-radius: 15px;
  box-shadow: 0 1px 5px 1px gray;
`;
