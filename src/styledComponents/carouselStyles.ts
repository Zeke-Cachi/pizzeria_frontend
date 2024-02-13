import styled from "styled-components";
import { ICarouselImg } from "../Interfaces";

export const CarouselImg = styled.div<ICarouselImg>`
  position: relative;
  width: 100%;
  padding-top: calc(500 / 1920 * 100%); /* Aspect ratio: 1920x500 */
  overflow: hidden;

  &::before {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: ${({ carouselimg }) => `url(${carouselimg})`};
    background-size: cover;
    background-position: center;
  }
`;
