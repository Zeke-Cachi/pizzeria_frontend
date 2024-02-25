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
import { Button, Hr, SecondaryTitle } from "../styledComponents/utils";
import { Link } from "react-router-dom";

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
              <label style={{ alignSelf: "self-start" }}>Username</label>
              <LoginInput type="text" placeholder="enter username" />
            </LoginInputContainer>
            <LoginInputContainer>
              <label style={{ alignSelf: "self-start" }}>Password</label>
              <LoginInput type="password" placeholder="enter password" />
            </LoginInputContainer>
            <Button
              buttonwidth="7rem"
              buttonheight="2.5rem"
              buttonmargin=".5rem"
              buttonfontsize="1.3rem"
              bgcolor="#ffa07a"
            >
              Login
            </Button>
          </LoginForm>
          <Hr width="70%" />
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
              buttonwidth="9rem"
              buttonheight="3rem"
              buttonmargin=".5rem"
              buttonfontsize="1.1rem"
              bgcolor="white"
              fontcolor="black"
              border="2px solid black"
            >
              Login with Google
            </Button>
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
