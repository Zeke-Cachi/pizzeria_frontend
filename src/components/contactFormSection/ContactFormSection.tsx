import { ContactFormSectionContainer } from "./contactFormSectionStyles";
import image from "../../assets/contact-form-bg.png";
import ContactForm from "../contactForm/ContactForm";

const ContactFormSection = () => {
  return (
    <ContactFormSectionContainer $image={image}>
      <ContactForm />
    </ContactFormSectionContainer>
  );
};

export default ContactFormSection;
