import styled from "styled-components";
import {
  StyledMainOptionsCardTopProps,
  ISecondaryTitle,
  IStyledButton,
  ICarouselImg,
} from "./Interfaces";

//-------------------------------- HEADER -----------------------------------------------------------------------------------------------------

export const HeaderStyle = styled.header`
  height: 6rem;
  background-color: black;
  box-shadow: 0 1px 5px 1px gray;
  width: 100vw;
  display: grid;
  place-items: center;
`;

export const HeaderWrapper = styled.div`
  width: 70%;
  heigth: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  inline-padding: 3rem;
`;

export const LogoImage = styled.img`
  height: 4rem;
  place-self: center;
`;

export const NavLinks = styled.li`
  font-family: Ubuntu;
  color: white;
  font-weight: 700;
  margin: 0 2rem;
  cursor: pointer;
`;

//-------------------------------- CAROUSEL/BANNER -------------------------------------------------------------------------------------------
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
    background-image: ${({ carouselImg }) => `url(${carouselImg})`};
    background-size: cover;
    background-position: center;
  }
`;

//-------------------------------- GENERIC BUTTON -------------------------------------------------------------------------------------------
export const Button = styled.button<IStyledButton>`
  width: 8rem;
  height: 3rem;
  background: #ffa07a;
  color: white;
  font-weight: 700;
  border-radius: 15px;
  border: none;
  transition: background 200ms ease-in-out;
  cursor: pointer;
  margin-top: ${({ top }) => top};

  &:hover {
    color: #ffa07a;
    background: black;
    border: 2px solid #ffa07a;
  }
`;

//-------------------------------- MAIN OPTIONS FROM THE MAIN PAGE -----------------------------------------------------------------------------
export const StyledMainOptions = styled.section`
  height: 700px;
  margin-top: 2rem;
  padding-top: 2rem;
`;

export const StyledMainOptionsCard = styled.div`
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
`;

export const MainOptionsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: top;
  gap: 7rem;
  width: 100%;
`;

export const StyledMainOptionsCardTop = styled.div<StyledMainOptionsCardTopProps>`
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center;
  height: 50%;
  width: 100%;
  background-image: ${(props) => `url(${props.image})`};
  transition: background-size 250ms ease-in-out;
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
`;

export const MainOptionsBanner = styled.img`
  width: 713px;
  height: 143px;
  margin-top: 3rem;
  border-radius: 15px;
  cursor: pointer;
`;

//-------------------------------- GENERIC SECONDARY TITLE ------------------------------------------------------------------------------------
export const SecondaryTitle = styled.h2<ISecondaryTitle>`
  color: ${({ fontColor }) => fontColor};
  font-size: ${({ size }) => size};
  margin-top: ${({ top }) => top};
  font-weight: 700;
`;

//-------------------------------- PIZZA OPTIONS FROM MAIN PAGE ------------------------------------------------------------------------------
export const StyledPizzaOptions = styled.section`
  background-color: #e6e6e6;
  min-height: 50rem;
  padding: 2rem 1rem 1rem 1rem;
  text-align: center;
`;

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

export const PizzaCardImg = styled.div<StyledMainOptionsCardTopProps>`
  height: 50%;
  width: 100%;
  background-image: ${({ image }) => `url(${image})`};
  background-size: cover;
`;

//-------------------------------- CONTACT FORM SECTION ---------------------------------------------------------------------------------------
export const ContactFormSectionContainer = styled.section<StyledMainOptionsCardTopProps>`
  background-image: ${({ image }) => `url(${image})`};
  background-size: cover;
  width: 100%;
  height: 70vh;
  display: grid;
  place-items: center;
  margin-top: 2rem;
`;

export const StyledContactForm = styled.form``;

export const ContactFormContainer = styled.div`
  width: 25rem;
  height: 100%;
  margin-top: 2rem;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem 0;
  gap: 0.5rem;
`;

export const FormInput = styled.input`
  border-radius: 10px;
  height: 2rem;
  width: 90%;
  outline: none;
  border: none;
  background-color: white;
`;

export const FormTextArea = styled.textarea`
  border-radius: 10px;
  height: 10rem;
  width: 90%;
  outline: none;
  border: none;
  background-color: white;
`;
