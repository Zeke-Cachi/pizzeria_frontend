import styled from "styled-components";
import { IStyledMainOptionsCard, Image } from "../../Interfaces";

export const StyledMainOptionsCard = styled.div<IStyledMainOptionsCard>`
  height: 20rem;
  width: 20rem;
  border-radius: 20px;
  box-shadow: 0 0 15px 10px #e0e0e0;
  overflow: hidden;
  cursor: pointer;
  &:hover {
    > :first-child {
      background-size: 110%;
    }
  }

  @media screen and (max-width: 1024px) {
    height: 14rem;
    width: ${({ $width }) => $width};
    grid-column: ${({ $gridspan }) => $gridspan};
  }
`;

export const StyledMainOptionsCardTop = styled.div<Image>`
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center;
  height: 50%;
  width: 100%;
  background-image: ${({ $image }) => `url(${$image})`};
  transition: background-size 1.5s ease-in-out;
`;

export const StyledMainOptionsCardBottom = styled.div`
  height: 50%;
  width: 100%;
  background: #252523;
  font-weight: 700;
  color: white;
  display: grid;
  place-items: center;
  text-align: center;
  font-size: 2rem;
  padding: 0 0.5rem;

  @media screen and (max-width: 1024px) {
    font-size: 1.3rem;
    line-height: 2rem;
  }
`;
