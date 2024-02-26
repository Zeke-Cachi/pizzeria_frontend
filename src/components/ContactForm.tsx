import {
  StyledContactForm,
  ContactFormContainer,
  InputContainer,
  FormInput,
  FormTextArea,
  SuccessMsg,
} from "../styledComponents/contactFormStyles";
import { SecondaryTitle, Button, ErrorMsg } from "../styledComponents/utils";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { ContactFormData } from "../Interfaces";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const validationSchema = yup
    .object({
      name: yup.string().required("Missing name!"),
      email: yup.string().required("Missing email!").email("Invalid email"),
      message: yup.string().required("Missing message!"),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const [hasFormSubmitted, setHasFormSubmitted] = useState<boolean>(false);

  const submitFunction = async (data: ContactFormData) => {
    const serviceId = import.meta.env.VITE_MAIL_SERVICE_ID;
    const templateId = import.meta.env.VITE_MAIL_TEMPLATE_ID;

    const contactInfo = {
      name: data.name,
      email: data.email,
      message: data.message,
    };

    const response = await emailjs.send(
      serviceId,
      templateId,
      contactInfo,
      import.meta.env.VITE_MAIL_USER_ID
    );

    if (response.status === 200) {
      setHasFormSubmitted(true);
      reset();
    } else {
      throw new Error("There was an error on sending the data");
    }
  };

  return (
    <ContactFormContainer id="contact">
      <SecondaryTitle $fontcolor="black" $size="2.5rem" $top="3rem">
        Contact us
      </SecondaryTitle>
      <StyledContactForm onSubmit={handleSubmit(submitFunction)}>
        <InputContainer>
          <label style={{ fontWeight: "700" }} htmlFor="name">
            Name and lastname
          </label>
          <FormInput
            placeholder="Enter full name"
            type="text"
            {...register("name")}
          />
          {errors.name && <ErrorMsg>{errors.name.message}</ErrorMsg>}
        </InputContainer>
        <InputContainer>
          <label style={{ fontWeight: "700" }} htmlFor="email">
            Email
          </label>
          <FormInput
            {...register("email")}
            placeholder="Enter email"
            type="email"
          />
          {errors.email && <ErrorMsg>{errors.email.message}</ErrorMsg>}
        </InputContainer>
        <InputContainer>
          <label style={{ fontWeight: "700" }} htmlFor="message">
            Message
          </label>
          <FormTextArea {...register("message")} placeholder="Enter message" />
          {errors.message && <ErrorMsg>{errors.message.message}</ErrorMsg>}
        </InputContainer>
        <Button $buttonmargin="1rem 0 0 0" $bgcolor="#222222">
          Submit
        </Button>
      </StyledContactForm>
      {hasFormSubmitted && <SuccessMsg>Message successfully sent!</SuccessMsg>}
    </ContactFormContainer>
  );
};

export default ContactForm;
