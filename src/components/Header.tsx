import {
  HeaderStyle,
  HeaderWrapper,
  LogoImage,
  NavLinks,
} from "../styledComponents/headerStyles";
import { Button } from "../styledComponents/utils";
import { Link } from "react-router-dom";
import logoImage from "../assets/giovannis-pizzeria-high-resolution-logo-transparent.png";
import { FaShoppingCart } from "react-icons/fa";
import { HashLink } from "react-router-hash-link";

const Header = () => {
  return (
    <>
      <HeaderStyle>
        <HeaderWrapper>
          <LogoImage src={logoImage} alt="logo image" logoheight="4rem" />
          <nav>
            <ul
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Link to="/" style={{ textDecoration: "none" }}>
                <NavLinks>Home</NavLinks>
              </Link>
              <HashLink
                smooth
                to="#all-pizzas"
                style={{ textDecoration: "none" }}
              >
                <NavLinks>Pizzas</NavLinks>
              </HashLink>
              <HashLink smooth to="#stores" style={{ textDecoration: "none" }}>
                <NavLinks>Stores</NavLinks>
              </HashLink>
              <HashLink smooth to="#contact" style={{ textDecoration: "none" }}>
                <NavLinks>Contact us</NavLinks>
              </HashLink>
            </ul>
          </nav>
          <Button bgcolor="#ffa07a">
            <FaShoppingCart /> Order online
          </Button>
        </HeaderWrapper>
      </HeaderStyle>
    </>
  );
};

export default Header;
