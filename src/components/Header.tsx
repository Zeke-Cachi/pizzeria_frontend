import {
  HeaderStyle,
  HeaderWrapper,
  LogoImage,
  NavLinks,
  Button,
} from "../StyledComponents";
import { Link } from "react-router-dom";
import logoImage from "../assets/giovannis-pizzeria-high-resolution-logo-transparent.png";

const Header = () => {
  return (
    <>
      <HeaderStyle>
        <HeaderWrapper>
          <LogoImage src={logoImage} alt="logo image" />
          <nav>
            <ul style={{ display: "flex", justifyContent: "space-between" }}>
              <Link to="/">
                <NavLinks>Home</NavLinks>
              </Link>
              <Link to="/pizzas">
                <NavLinks>Pizzas</NavLinks>
              </Link>
              <Link to="/stores">
                <NavLinks>Stores</NavLinks>
              </Link>
              <Link to="/contact">
                <NavLinks>Contact us</NavLinks>
              </Link>
            </ul>
          </nav>
          <Button>Order online</Button>
        </HeaderWrapper>
      </HeaderStyle>
      ;
    </>
  );
};

export default Header;
