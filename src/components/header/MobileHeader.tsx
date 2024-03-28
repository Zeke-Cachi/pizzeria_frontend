import { Link } from "react-router-dom";
import {
  CartCounter,
  MobileHeaderContainer,
  NavLinks,
  RegisterLoginLink,
} from "./headerStyles";
import { HashLink } from "react-router-hash-link";
import { ICart, IUserData } from "../../Interfaces";
import { useSelector } from "react-redux";
import { RootState } from "../../state/store";
import useIsMobile from "../../customHooks/useIsMobile";

const MobileHeader: React.FC<{
  showMobileMenu: boolean;
  userData: IUserData;
}> = ({ showMobileMenu, userData }) => {
  const pizzaList: ICart = useSelector((state: RootState) => state.pizzaList);
  const isDesktop = useIsMobile();

  return (
    <MobileHeaderContainer $ismobile={showMobileMenu} $isdesktop={isDesktop}>
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
          {userData.givenName ? `Hi, ${userData.givenName}` : "Sign in"}
        </RegisterLoginLink>
      </Link>
      <Link to="/cart" style={{ textDecoration: "none", position: "relative" }}>
        <CartCounter $cartnumber={pizzaList.cart.length}>My Cart</CartCounter>
      </Link>
    </MobileHeaderContainer>
  );
};

export default MobileHeader;
//HACER UN ICONITO AL LADO DEL CART, AJUSTAR COLORES DE FONDO Y HACER LA CRUZ EN VEZ DEL HAMBURGUER
