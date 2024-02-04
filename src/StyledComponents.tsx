import styled from "styled-components";
import { StyledMainOptionsCardTopProps } from "./Interfaces";

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

export const Button = styled.button`
  width: 8rem;
  height: 3rem;
  background: #ffa07a;
  color: white;
  font-weight: 700;
  border-radius: 15px;
  border: none;
  transition: background 200ms ease-in-out;
  cursor: pointer;

  &:hover {
    color: #ffa07a;
    background: black;
    border: 2px solid #ffa07a;
  }
`;

export const StyledMainOptions = styled.section`
  height: 630px;
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
`;

export const MainOptionsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: top;
  gap: 7rem;
  width: 100%;
`;

export const StyledMainOptionsCardTop = styled.div<StyledMainOptionsCardTopProps>`
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 50%;
  width: 100%;
  background-image: ${(props) => `url(${props.image})`};
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

export const StyledPizzaOptions = styled.section`
  background-color: #e6e6e6;
  height: 50rem;
  padding: 2rem 1rem 1rem 1rem;
  text-align: center;
`;

export const SecondaryTitle = styled.h2`
  color: gray;
  font-size: 3rem;
  font-weight: 700;
`;
