import {
  SecondaryTitle,
  StyledContactForm,
  ContactFormContainer,
  InputContainer,
  FormInput,
  FormTextArea,
} from "../StyledComponents";

const ContactForm = () => {
  return (
    <ContactFormContainer>
      <SecondaryTitle fontColor="black" size="2.5rem" top="3rem">
        Contact us
      </SecondaryTitle>
      <StyledContactForm>
        <InputContainer>
          <label style={{ fontWeight: "700" }} htmlFor="fullName">
            Name and lastname
          </label>
          <FormInput type="text" name="fullName" />
        </InputContainer>
        <InputContainer>
          <label style={{ fontWeight: "700" }} htmlFor="email">
            Email
          </label>
          <FormInput type="email" name="email" />
        </InputContainer>
        <InputContainer>
          <label style={{ fontWeight: "700" }} htmlFor="message">
            Message
          </label>
          <FormTextArea name="message" />
        </InputContainer>
      </StyledContactForm>
    </ContactFormContainer>
  );
};

export default ContactForm;
