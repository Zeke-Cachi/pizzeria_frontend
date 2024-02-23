import Footer from "../components/Footer";
import Header from "../components/Header";
import loginBg from "../assets/login-bg.jpg";
import {
  LoginContainer,
  LoginForm,
  LoginFormContainer,
  LoginInput,
  LoginInputContainer,
} from "../styledComponents/loginStyles";
import { SecondaryTitle } from "../styledComponents/utils";

const Login = () => {
  return (
    <>
      <Header />
      <LoginContainer img={loginBg}>
        <LoginFormContainer>
          <SecondaryTitle fontcolor="black" top="1rem" size="2.5rem">
            Sign in
          </SecondaryTitle>
          <LoginForm>
            <LoginInputContainer>
              <label htmlFor="" style={{ alignSelf: "self-start" }}>
                Username
              </label>
              <LoginInput type="text" />
            </LoginInputContainer>
            <LoginInputContainer>
              <label htmlFor="" style={{ alignSelf: "self-start" }}>
                Password
              </label>
              <LoginInput type="password" />
            </LoginInputContainer>
          </LoginForm>
        </LoginFormContainer>
      </LoginContainer>
      <Footer />
    </>
  );
};

export default Login;
