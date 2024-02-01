import styled from "styled-components";

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
  outline: none;
  border: none;
  transition: background 200ms ease-in-out;

  &:hover {
    color: #ffa07a;
    background: black;
    border: 2px solid #ffa07a;
  }
`;
