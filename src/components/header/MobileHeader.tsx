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
import { Dispatch, SetStateAction } from "react";

const MobileHeader: React.FC<{
  showMobileMenu: boolean;
  setShowMobileMenu: Dispatch<SetStateAction<boolean>>;
  userData: IUserData;
}> = ({ showMobileMenu, userData, setShowMobileMenu }) => {
  const pizzaList: ICart = useSelector((state: RootState) => state.pizzaList);
  const isDesktop = useIsMobile();

  return (
    <MobileHeaderContainer $ismobile={showMobileMenu} $isdesktop={isDesktop}>
      <Link
        to="/"
        style={{ textDecoration: "none" }}
        onClick={() => setShowMobileMenu(false)}
      >
        <NavLinks>Home</NavLinks>
      </Link>
      <HashLink
        smooth
        to="/#all-pizzas"
        style={{ textDecoration: "none" }}
        onClick={() => setShowMobileMenu(false)}
      >
        <NavLinks>Pizzas</NavLinks>
      </HashLink>
      <HashLink
        smooth
        to="/#stores"
        style={{ textDecoration: "none" }}
        onClick={() => setShowMobileMenu(false)}
      >
        <NavLinks>Stores</NavLinks>
      </HashLink>
      <HashLink
        smooth
        to="/#contact"
        style={{ textDecoration: "none" }}
        onClick={() => setShowMobileMenu(false)}
      >
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
