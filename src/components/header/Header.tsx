import {
  HeaderStyle,
  HeaderWrapper,
  LogoImage,
  NavLinks,
  RegisterLoginLink,
  ProfilePic,
  CartNumericDisplay,
  NavUl,
  Nav,
  CartAndProfileContainer,
  HamburguerMenu,
} from "./headerStyles";
import { CartIcon } from "../../styledComponentsUtils/utils";
import { Link } from "react-router-dom";
import logoImage from "../../assets/giovannis-pizzeria-high-resolution-logo-transparent.png";
import { HashLink } from "react-router-hash-link";
import { useSelector } from "react-redux";
import { RootState } from "../../state/store";
import MobileHeader from "./MobileHeader";
import { useState } from "react";

const Header = () => {
  const userData = useSelector((state: RootState) => state.userData);
  const cart = useSelector((state: RootState) => state.pizzaList);
  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false);

  return (
    <>
      <HeaderStyle>
        <HeaderWrapper>
          <Link to="/">
            <LogoImage src={logoImage} alt="logo image" $logoheight="4rem" />
          </Link>
          <HamburguerMenu
            onClick={() => setShowMobileMenu(!showMobileMenu)}
          ></HamburguerMenu>
          <MobileHeader showMobileMenu={showMobileMenu} />
          <Nav>
            <NavUl>
              <Link to="/" style={{ textDecoration: "none" }}>
                <NavLinks>Home</NavLinks>
              </Link>
              <HashLink
                smooth
                to="/#all-pizzas"
                style={{ textDecoration: "none" }}
              >
                <NavLinks>Pizzas</NavLinks>
              </HashLink>
              <HashLink smooth to="/#stores" style={{ textDecoration: "none" }}>
                <NavLinks>Stores</NavLinks>
              </HashLink>
              <HashLink
                smooth
                to="/#contact"
                style={{ textDecoration: "none" }}
              >
                <NavLinks>Contact us</NavLinks>
              </HashLink>
            </NavUl>
          </Nav>
          <CartAndProfileContainer>
            <div style={{ position: "relative" }}>
              <Link to="/cart">
                <CartIcon />
              </Link>
              {cart.cart.length ? (
                <CartNumericDisplay $iscartempty={cart.cart.length}>
                  {cart.cart.length}
                </CartNumericDisplay>
              ) : null}
            </div>

            {userData.email ? (
              <ProfilePic
                src={userData.profileImage}
                alt="user profile image"
              />
            ) : (
              <Link to="/users/login" style={{ textDecoration: "none" }}>
                <RegisterLoginLink $ismobile={showMobileMenu}>
                  Sign in
                </RegisterLoginLink>
              </Link>
            )}
          </CartAndProfileContainer>
        </HeaderWrapper>
      </HeaderStyle>
    </>
  );
};
export default Header;
