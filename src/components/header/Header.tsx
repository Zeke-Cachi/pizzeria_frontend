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
  ClosingIcon,
} from "./headerStyles";
import { CartIcon } from "../../styledComponentsUtils/utils";
import { Link } from "react-router-dom";
import logoImage from "../../assets/giovannis-pizzeria-high-resolution-logo-transparent.png";
import { HashLink } from "react-router-hash-link";
import { useSelector } from "react-redux";
import { RootState } from "../../state/store";
import MobileHeader from "./MobileHeader";
import { useEffect, useState } from "react";
import useIsMobile from "../../customHooks/useIsMobile";

const Header = () => {
  const userData = useSelector((state: RootState) => state.userData);
  const cart = useSelector((state: RootState) => state.pizzaList);
  const isMobile = useIsMobile();
  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false);
  useEffect(() => {
    if (!isMobile) setShowMobileMenu(false);
  }, [isMobile]);

  return (
    <>
      <HeaderStyle>
        <HeaderWrapper>
          <Link to="/">
            <LogoImage src={logoImage} alt="logo image" $logoheight="4rem" />
          </Link>
          {!showMobileMenu ? (
            <HamburguerMenu
              onClick={() => setShowMobileMenu(!showMobileMenu)}
            ></HamburguerMenu>
          ) : (
            <ClosingIcon
              onClick={() => setShowMobileMenu(!showMobileMenu)}
            ></ClosingIcon>
          )}
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
