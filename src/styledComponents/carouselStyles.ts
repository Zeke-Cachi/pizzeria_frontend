import styled from "styled-components";
import { ICarouselImg } from "../Interfaces";

export const CarouselImg = styled.div<ICarouselImg>`
  position: relative;
  padding-top: calc(500 / 1920 * 100%);
  overflow: hidden;

  &::before {
    content: "";
    display: block;
    position: absolute;
    inset: 0;
    background-image: ${({ carouselimg }) => `url(${carouselimg})`};
    background-size: cover;
    background-position: center;
  }
`;
