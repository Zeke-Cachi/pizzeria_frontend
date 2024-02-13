import styled from "styled-components";
import { ILogoImg } from "../Interfaces";

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
  height: ${({ logoheight }) => logoheight};
  place-self: center;
`;

export const NavLinks = styled.li`
  font-family: Ubuntu;
  color: white;
  font-weight: 700;
  margin: 0 2rem;
  cursor: pointer;
`;
