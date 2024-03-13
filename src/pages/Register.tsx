import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import loginBg from "../assets/login-bg.jpg";
import {
  LoginContainer,
  LoginForm,
  LoginFormContainer,
  LoginInput,
  LoginInputContainer,
} from "./login/loginStyles";
import { Button, Hr, SecondaryTitle } from "../styledComponentsUtils/utils";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { ErrorMsg } from "../styledComponentsUtils/utils";
import { IRegisterData } from "../Interfaces";
import toast, { Toaster } from "react-hot-toast";

//---------------------------------------------------------------------------------------------------------------

const Register = () => {
  const navigate = useNavigate();

  const registerValidationSchema = yup
    .object({
      name: yup.string().required("Missing name!"),
      lastname: yup.string().required("Missing lastname!"),
      email: yup.string().required("Missing email!").email("Invalid email"),
      password: yup.string().required("Missing password!"),
      phoneNumber: yup.string(),
      address: yup.string().required("Missing address!"),
      city: yup.string().required("Missing city name!"),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(registerValidationSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const submitRegister = async (data: IRegisterData) => {
    const userRegisterData = {
      name: data.name,
      lastname: data.lastname,
      email: data.email,
      password: data.password,
      phoneNumber: Number(data.phoneNumber),
      address: data.address,
      city: data.city,
    };
    const response = await axios.post(
      import.meta.env.VITE_FORM_REGISTER,
      userRegisterData
    );
    if (response.status === 201) {
      console.log("Great register success");
      reset();
      toast.success("Successfully Logged in!");
      setTimeout(() => {
        navigate("/");
      }, 750);
    } else {
      console.log("Great register failure");
    }
  };

  //-------------------------------------------------------------------------------------------------------

  return (
    <>
      <Toaster position="bottom-center" />
      <Header />
      <LoginContainer $img={loginBg}>
        <LoginFormContainer>
          <SecondaryTitle $fontcolor="black" $top="1rem" $size="2.5rem">
            Sign up
          </SecondaryTitle>
          <LoginForm onSubmit={handleSubmit(submitRegister)}>
            <LoginInputContainer>
              <label style={{ alignSelf: "self-start" }}>Name</label>
              <LoginInput
                type="text"
                placeholder="enter name"
                {...register("name")}
              />
              {errors.name && <ErrorMsg>{errors.name.message}</ErrorMsg>}
            </LoginInputContainer>
            <LoginInputContainer>
              <label style={{ alignSelf: "self-start" }}>Lastname</label>
              <LoginInput
                type="text"
                placeholder="enter lastname"
                {...register("lastname")}
              />
              {errors.lastname && (
                <ErrorMsg>{errors.lastname.message}</ErrorMsg>
              )}
            </LoginInputContainer>

            <LoginInputContainer>
              <label style={{ alignSelf: "self-start" }}>Email</label>
              <LoginInput
                type="text"
                placeholder="enter email"
                {...register("email")}
              />
              {errors.email && <ErrorMsg>{errors.email.message}</ErrorMsg>}
            </LoginInputContainer>
            <LoginInputContainer>
              <label style={{ alignSelf: "self-start" }}>Password</label>
              <LoginInput
                type="password"
                placeholder="enter password"
                {...register("password")}
              />
              {errors.password && (
                <ErrorMsg>{errors.password.message}</ErrorMsg>
              )}
            </LoginInputContainer>
            <LoginInputContainer>
              <label style={{ alignSelf: "self-start" }}>Phone Number</label>
              <LoginInput
                type="tel"
                placeholder="enter phone number"
                {...register("phoneNumber")}
              />
              {errors.phoneNumber && (
                <ErrorMsg>{errors.phoneNumber.message}</ErrorMsg>
              )}
            </LoginInputContainer>
            <LoginInputContainer>
              <label style={{ alignSelf: "self-start" }}>Address</label>
              <LoginInput
                type="text"
                placeholder="enter address"
                {...register("address")}
              />
              {errors.address && <ErrorMsg>{errors.address.message}</ErrorMsg>}
            </LoginInputContainer>
            <LoginInputContainer>
              <label style={{ alignSelf: "self-start" }}>City</label>
              <LoginInput
                type="text"
                placeholder="enter your city"
                {...register("city")}
              />
              {errors.city && <ErrorMsg>{errors.city.message}</ErrorMsg>}
            </LoginInputContainer>
            <Button
              type="submit"
              $buttonwidth="7rem"
              $buttonheight="2.5rem"
              $buttonmargin=".5rem"
              $buttonfontsize="1.3rem"
              $bgcolor="#ffa07a"
            >
              Sign in
            </Button>
          </LoginForm>
          <Hr $width="70%" />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "0 2rem",
              height: "7rem",
            }}
          >
            <Button
              $buttonwidth="9rem"
              $buttonheight="3rem"
              $buttonmargin=".5rem"
              $buttonfontsize="1.1rem"
              $bgcolor="white"
              $fontcolor="black"
              $border="2px solid black"
            >
              Login with Google
            </Button>
            <p>
              Already have an account? sign in <Link to="/register">here</Link>
            </p>
          </div>
        </LoginFormContainer>
      </LoginContainer>
      <Footer />
    </>
  );
};

export default Register;