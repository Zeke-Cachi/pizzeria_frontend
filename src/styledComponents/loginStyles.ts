import styled from "styled-components";
import { ILoginContainer } from "../Interfaces";

export const LoginContainer = styled.section<ILoginContainer>`
  width: 100%;
  height: 90vh;
  background-image: ${({ img }) => `url(${img})`};
  background-size: cover;
  display: grid;
  place-items: center;
`;

export const LoginFormContainer = styled.div`
  height: 50vh;
  width: 40rem;
  background-color: white;
  border-radius: 15px;
  z-index: 10;
  text-align: center;
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

export const LoginInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  text-align: left;
  width: 80%;
`;

export const LoginInput = styled.input`
  height: 3rem;
  border-radius: 10px;
  padding: 0.5rem;
  outline: none;
  border: 1px solid lightgray;
  width: 100%;

  &::-webkit-input-placeholder {
    font-style: italic;
    color: lightgray;
  }

  &:-moz-placeholder {
    font-style: italic;
  }
`;
