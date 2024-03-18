import styled from "styled-components";
import { Image } from "../../Interfaces";
import pizzaPlaceholderIcon from "../../assets/Pizza-placeholder-icon.png";

export const PizzaCardContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 3rem;
  padding: 0 10rem;
  margin: 2rem 0;
  flex-wrap: wrap;
`;

export const PizzaCard = styled.div`
  height: 18rem;
  width: 18rem;
  border-radius: 15px;
  overflow: hidden;
  background-color: #e6e6e6;
  box-shadow: 0px 0px 15px 15px #cfcfcf;
`;

export const PizzaCardImg = styled.div<Image>`
  height: 50%;
  width: 100%;
  background-image: ${({ $image }) =>
    $image ? `url(${$image})` : `url(${pizzaPlaceholderIcon})`};
  background-size: cover;
`;
