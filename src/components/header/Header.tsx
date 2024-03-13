import {
  HeaderStyle,
  HeaderWrapper,
  LogoImage,
  NavLinks,
  RegisterLoginLink,
  ProfilePic,
  CartNumericDisplay,
} from "./headerStyles";
import { CartIcon } from "../../styledComponentsUtils/utils";
import { Link } from "react-router-dom";
import logoImage from "../../assets/giovannis-pizzeria-high-resolution-logo-transparent.png";
import { HashLink } from "react-router-hash-link";
import { useSelector } from "react-redux";
import { RootState } from "../../state/store";

const Header = () => {
  const userData = useSelector((state: RootState) => state.userData);
  const cart = useSelector((state: RootState) => state.pizzaList);

  return (
    <>
      <HeaderStyle>
        <HeaderWrapper>
          <Link to="/">
            <LogoImage src={logoImage} alt="logo image" $logoheight="4rem" />
          </Link>
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
            </ul>
          </nav>
          <div
            style={{
              display: "flex",
              gap: "4rem",
              alignItems: "center",
            }}
          >
            <div style={{ position: "relative" }}>
              <CartIcon />
              <CartNumericDisplay $iscartempty={cart.cart.length}>
                {cart.cart.length}
              </CartNumericDisplay>
            </div>

            {userData.profileImage ? (
              <ProfilePic
                src={userData.profileImage}
                alt="user profile image"
              />
            ) : (
              <Link to="/login" style={{ textDecoration: "none" }}>
                <RegisterLoginLink>Sign in</RegisterLoginLink>
              </Link>
            )}
          </div>
        </HeaderWrapper>
      </HeaderStyle>
    </>
  );
};
export default Header;
