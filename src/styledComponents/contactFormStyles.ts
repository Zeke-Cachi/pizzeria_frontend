import styled from "styled-components";

export const ContactFormContainer = styled.div`
  width: 25rem;
  height: 100%;
  margin-top: 2rem;
`;

export const StyledContactForm = styled.form``;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem 0;
  gap: 0.5rem;
  position: relative;
`;

export const FormInput = styled.input`
  border-radius: 10px;
  height: 2rem;
  width: 90%;
  outline: none;
  border: none;
  background-color: white;
  padding: 0.1rem 0.1rem 0.1rem 0.5rem;
  font-style: italic;
  }
`;

export const ErrorMsg = styled.span`
  font-weight: 700;
  color: red;
  font-size: 0.8rem;
  position: absolute;
  bottom: -1.2rem;
`;

export const FormTextArea = styled.textarea`
  border-radius: 10px;
  height: 10rem;
  width: 90%;
  outline: none;
  border: none;
  background-color: white;
  padding: 0.5rem;
  font-style: italic;
`;

export const SuccessMsg = styled.span`
  color: green;
  font-style: italic;
  font-weight: 700;
  font-size: 1.3rem;
  margin-top: 1rem;
`;
