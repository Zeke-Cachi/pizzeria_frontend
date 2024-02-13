import styled from "styled-components";
import { Image } from "../Interfaces";

export const StoresContainer = styled.section`
  height: 70vh;
  width: 100%;
  background-color: white;
  text-align: center;
  padding: 2rem;
`;

export const AllStores = styled.div`
  display: flex;
  gap: 5rem;
  justify-content: center;
`;

export const Store = styled.div`
  height: 40vh;
  width: 40vw;
  border-radius: 15px;
  overflow: hidden;
  margin-top: 5rem;
  box-shadow: 0px 0px 15px 10px lightgray;
`;

export const StoreImg = styled.div<Image>`
  background-image: ${({ image }) => `url(${image})`};
  background-size: cover;
  background-position: center;
  height: 50%;
  width: 100%;
`;

export const StoreInfo = styled.div`
  background-color: white;
  height: 50%;
  width: 100%;
  color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`;
