import {
  SecondaryTitle,
  StyledContactForm,
  ContactFormContainer,
  InputContainer,
  FormInput,
  FormTextArea,
  Button,
  ErrorMsg,
  SuccessMsg,
} from "../StyledComponents";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { ContactFormData } from "../Interfaces";
import axios, { AxiosResponse } from "axios";
import { useState } from "react";

const ContactForm = () => {
  const validationSchema = yup
    .object({
      fullName: yup.string().required("Missing name!"),
      email: yup.string().required("Missing email!").email("Invalid email"),
      message: yup.string().required("Missing message!"),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      fullName: "",
      email: "",
      message: "",
    },
  });

  const [hasFormSubmitted, setHasFormSubmitted] = useState<boolean>(false);

  const submitFunction = async (data: ContactFormData) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const dataSent: AxiosResponse<any> = await axios.post(
      "http://localhost:8080/api/v1/contact-form-data",
      data
    );
    if (dataSent.status === 200) {
      setHasFormSubmitted(true);
    }
  };

  return (
    <ContactFormContainer>
      <SecondaryTitle fontcolor="black" size="2.5rem" top="3rem">
        Contact us
      </SecondaryTitle>
      <StyledContactForm onSubmit={handleSubmit(submitFunction)}>
        <InputContainer>
          <label style={{ fontWeight: "700" }} htmlFor="fullName">
            Name and lastname
          </label>
          <FormInput
            placeholder="Enter full name"
            type="text"
            {...register("fullName")}
          />
          {errors.fullName && <ErrorMsg>{errors.fullName.message}</ErrorMsg>}
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
        <Button top="1rem" bgcolor="#222222">
          Submit
        </Button>
      </StyledContactForm>
      {hasFormSubmitted && <SuccessMsg>Message successfully sent!</SuccessMsg>}
    </ContactFormContainer>
  );
};

export default ContactForm;
