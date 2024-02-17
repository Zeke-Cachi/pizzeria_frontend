import styled from "styled-components";
import { ICarouselImg, IOptionalCarouselStyling } from "../Interfaces";

export const OptionalCarouselStyling = styled.div<IOptionalCarouselStyling>`
  width: ${({ carouselwidth }) => (carouselwidth ? carouselwidth : "auto")};
  height: ${({ carouselheight }) => (carouselheight ? carouselheight : "auto")};
`;

export const CarouselImg = styled.div<ICarouselImg>`
  position: relative;
  padding-top: ${({ paddingtop }) => (paddingtop ? paddingtop : 0)};
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
