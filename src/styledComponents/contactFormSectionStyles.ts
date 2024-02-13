import styled from "styled-components";
import { Image } from "../Interfaces";

export const ContactFormSectionContainer = styled.section<Image>`
  background-image: ${({ image }) => `url(${image})`};
  background-size: cover;
  width: 100%;
  height: 70vh;
  display: grid;
  place-items: center;
  margin-top: 2rem;
`;
