import styled from "styled-components";
import { ILogoImg, ICartCounterDisplay } from "../../Interfaces";

export const HeaderStyle = styled.header`
  height: 6rem;
  background-color: black;
  box-shadow: 0 1px 5px 1px gray;
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

export const LogoImage = styled.img<ILogoImg>`
  height: ${({ $logoheight }) => $logoheight};
  place-self: center;
`;

export const NavLinks = styled.li`
  font-family: Ubuntu;
  color: white;
  font-weight: 700;
  margin: 0 2rem;
  cursor: pointer;
`;

export const RegisterLoginLink = styled.p`
  color: white;
  font-size: 1.3rem;
  cursor: pointer;
`;

export const ProfilePic = styled.img`
  border-radius: 50%;
  height: 3rem;
  width: 3rem;
  cursor: pointer;
  box-shadow: 0 0 2px 3px white;
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
