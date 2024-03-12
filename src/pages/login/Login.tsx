import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import loginBg from "../../assets/login-bg.jpg";
import {
  LoginContainer,
  LoginForm,
  LoginFormContainer,
  LoginInput,
  LoginInputContainer,
} from "./loginStyles";
import { Button, Hr, SecondaryTitle } from "../../styledComponentsUtils/utils";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { ErrorMsg } from "../../styledComponentsUtils/utils";
import toast, { Toaster } from "react-hot-toast";

//---------------------------------------------------------------------------------------------------------------

const Login = () => {
  const navigate = useNavigate();

  const loginValidationSchema = yup
    .object({
      email: yup.string().required("Missing email!").email("Invalid email"),
      password: yup.string().required("Missing password!"),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(loginValidationSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const submitLogin = async (data: { email: string; password: string }) => {
    const userLoginData = {
      email: data.email,
      password: data.password,
    };
    const response = await axios.post(
      import.meta.env.VITE_FORM_LOGIN,
      userLoginData
    );
    if (response.status === 200) {
      console.log("Great login success");
      reset();
      toast.success("Successfully Logged in!");
      setTimeout(() => {
        navigate("/");
      }, 750);
    } else {
      console.log("Great login failure");
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
            Sign in
          </SecondaryTitle>
          <LoginForm onSubmit={handleSubmit(submitLogin)}>
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
            <a href="http://localhost:8080/oauth2/authorization/google">
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
            </a>

            <p>
              Not registered? sign up <Link to="/register">here</Link>
            </p>
          </div>
        </LoginFormContainer>
      </LoginContainer>
      <Footer />
    </>
  );
};

export default Login;
