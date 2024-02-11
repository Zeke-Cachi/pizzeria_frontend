import {
  SecondaryTitle,
  StyledContactForm,
  ContactFormContainer,
  InputContainer,
  FormInput,
  FormTextArea,
  Button,
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
          <FormInput
            placeholder="Enter full name"
            type="text"
            name="fullName"
          />
        </InputContainer>
        <InputContainer>
          <label style={{ fontWeight: "700" }} htmlFor="email">
            Email
          </label>
          <FormInput placeholder="Enter email" type="email" name="email" />
        </InputContainer>
        <InputContainer>
          <label style={{ fontWeight: "700" }} htmlFor="message">
            Message
          </label>
          <FormTextArea placeholder="Enter message" name="message" />
        </InputContainer>
        <Button top="1rem" bgColor="#222222">
          Submit
        </Button>
      </StyledContactForm>
    </ContactFormContainer>
  );
};

export default ContactForm;
