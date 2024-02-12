import { ContactFormSectionContainer } from "../StyledComponents";
import image from "../assets/contact-form-bg.png";
import ContactForm from "./ContactForm";

const ContactFormSection = () => {
  return (
    <ContactFormSectionContainer image={image}>
      <ContactForm />
    </ContactFormSectionContainer>
  );
};

export default ContactFormSection;