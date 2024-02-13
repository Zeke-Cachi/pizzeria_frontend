import styled from "styled-components";
import { Image } from "../Interfaces";

export const StoresContainer = styled.section`
  height: 30rem;
  width: 100%;
  background-color: black;
  text-align: center;
  padding: 2rem;
`;

export const AllStores = styled.div`
  display: flex;
  gap: 5rem;
  justify-content: center;
`;

export const Store = styled.div``;

export const StoreImg = styled.div<Image>`
  background-image: ${({ image }) => `url(${image})`};
`;
