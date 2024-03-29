import styled from "styled-components";
import {
  ILogoImg,
  ICartCounterDisplay,
  IsMobile,
  ICartCounter,
  IHeaderSize,
} from "../../Interfaces";
import { FaBars, FaTimes } from "react-icons/fa";

export const HeaderStyle = styled.header<IHeaderSize>`
  height: 6rem;
  background-color: black;
  box-shadow: 0 1px 5px 1px gray;
  display: grid;
  place-items: center;
  position: relative;
  transition: height 200ms ease-in-out;

  @media screen and (max-width: 1024px) {
    z-index: 50;
    position: fixed;
    width: 100%;
    height: ${({ $scrollmovement }) =>
      $scrollmovement === "down" ? "4rem" : "6rem"};
  }
`;

export const HeaderWrapper = styled.div`
  width: 70%;
  heigth: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  inline-padding: 3rem;

  @media screen and (max-width: 1024px) {
    width: 90%;
  }
`;

export const LogoImage = styled.img<ILogoImg>`
  height: ${({ $logoheight }) => $logoheight};
  place-self: center;
  transition: height 200ms ease-in-out;

  @media screen and (max-width: 1024px) {
    height: ${({ $scrollmovement, $logoheight }) =>
      $scrollmovement === "down" ? "2rem" : $logoheight};
  }
`;

export const HamburguerMenu = styled(FaBars)`
  color: white;
  width: 2rem;
  height: 2rem;
  cursor: pointer;
  display: none;

  @media screen and (max-width: 1024px) {
    display: inline;
  }
`;

export const ClosingIcon = styled(FaTimes)`
  color: white;
  width: 2rem;
  height: 2rem;
  cursor: pointer;
  display: none;

  @media screen and (max-width: 1024px) {
    display: inline;
  }
`;

export const Nav = styled.nav`
  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

export const MobileNav = styled.nav`
  display: grid;
`;

export const NavUl = styled.ul`
  display: flex;
  justify-content: space-between;
`;

export const NavLinks = styled.li`
  font-family: Ubuntu;
  color: white;
  font-weight: 700;
  margin: 0 2rem;
  cursor: pointer;
  position: relative;

  @media screen and (max-width: 1024px) {
    text-decoration: none;
  }
`;

export const CartAndProfileContainer = styled.div`
  display: flex;
  gap: 4rem;
  align-items: center;

  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

export const RegisterLoginLink = styled.p<IsMobile>`
  color: white;
  font-size: 1.3rem;
  cursor: pointer;

  @media screen and (max-width: 1024px) {
    font-weight: bolder;
    font-size: 1rem;
  }
`;

export const ProfilePic = styled.img`
  border-radius: 50%;
  height: 3rem;
  width: 3rem;
  cursor: pointer;
  background: white;
`;

export const CartNumericDisplay = styled.div<ICartCounterDisplay>`
  position: absolute;
  background: red;
  border-radius: 100%;
  top: -0.3rem;
  right: -0.5rem;
  width: 1.2rem;
  height: 1.2rem;
  text-align: center;
  color: white;
  display: flex;
  align-items: start;
  justify-content: center;
  font-weight: 700;
`;

export const MobileHeaderContainer = styled.div<IsMobile>`
  z-index: 50;
  width: 100%;
  height: 10rem;
  background: #252523;
  position: absolute;
  top: 100%;
  left: 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  place-items: center;
  pointer-events: ${({ $ismobile }) => ($ismobile ? `auto` : "none")};
  opacity: ${({ $ismobile }) => ($ismobile ? "1" : "0")};
  transition: opacity 200ms ease-in-out;
  visibility: ${({ $isdesktop }) => (!$isdesktop ? "hidden" : "visible")};
`;

export const CartCounter = styled(NavLinks)<ICartCounter>`
  ${({ $cartnumber }) =>
    $cartnumber !== 0
      ? `&::after {
    content: "${$cartnumber}";
    position: absolute;
    border-radius: 50%;
    background: red;
    height: 1.2rem;
    width: 1.2rem;
    top: 50%;
    right: -1.8rem;
    transform: translateY(-50%);
    display: grid;
    place-items: center;
  }`
      : `&::after {
    visibility: hidden;
  }`}
`;
