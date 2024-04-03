import { CartCardContainer } from "./CartStyles";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import CartCardList from "./cartCartList/CartCardList";
import { useSelector } from "react-redux";
import { RootState } from "../../state/store";
import useIsMobile from "../../customHooks/useIsMobile";

const Cart = () => {
  const cartItems = useSelector((state: RootState) => state.pizzaList);
  const { cart } = cartItems;
  const isMobile = useIsMobile();

  return (
    <>
      <Header />
      <CartCardContainer $ismobile={isMobile}>
        <CartCardList cart={cart} />
      </CartCardContainer>
      <Footer />
    </>
  );
};

export default Cart;
