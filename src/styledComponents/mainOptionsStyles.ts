import styled from "styled-components";
import { Image } from "../Interfaces";

export const StyledMainOptions = styled.section`
  height: 700px;
  margin-top: 2rem;
  padding-top: 2rem;
`;

export const MainOptionsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: top;
  gap: 7rem;
  width: 100%;
`;

export const StyledMainOptionsCardTop = styled.div<Image>`
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center;
  height: 50%;
  width: 100%;
  background-image: ${({ image }) => `url(${image})`};
  transition: background-size 250ms ease-in-out;
`;

export const MainOptionsBanner = styled.img`
  width: 713px;
  height: 143px;
  margin-top: 3rem;
  border-radius: 15px;
  cursor: pointer;
`;
