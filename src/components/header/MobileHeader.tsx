import { Link } from "react-router-dom";
import {
  MobileHeaderContainer,
  NavLinks,
  RegisterLoginLink,
} from "./headerStyles";
import { HashLink } from "react-router-hash-link";

const MobileHeader: React.FC<{ showMobileMenu: boolean }> = ({
  showMobileMenu,
}) => {
  return (
    <MobileHeaderContainer $ismobile={showMobileMenu}>
      <Link to="/" style={{ textDecoration: "none" }}>
        <NavLinks>Home</NavLinks>
      </Link>
      <HashLink smooth to="/#all-pizzas" style={{ textDecoration: "none" }}>
        <NavLinks>Pizzas</NavLinks>
      </HashLink>
      <HashLink smooth to="/#stores" style={{ textDecoration: "none" }}>
        <NavLinks>Stores</NavLinks>
      </HashLink>
      <HashLink smooth to="/#contact" style={{ textDecoration: "none" }}>
        <NavLinks>Contact us</NavLinks>
      </HashLink>
      <Link to="/users/login" style={{ textDecoration: "none" }}>
        <RegisterLoginLink $ismobile={showMobileMenu}>
          Sign in
        </RegisterLoginLink>
      </Link>
      <Link to="/cart" style={{ textDecoration: "none" }}>
        <NavLinks>My Cart</NavLinks>
      </Link>
    </MobileHeaderContainer>
  );
};

export default MobileHeader;
//HACER UN ICONITO AL LADO DEL CART, AJUSTAR COLORES DE FONDO Y HACER LA CRUZ EN VEZ DEL HAMBURGUER
