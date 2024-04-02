import { CartCardContainer } from "./CartStyles";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import CartCardList from "./cartCartList/CartCardList";
import { useSelector } from "react-redux";
import { RootState } from "../../state/store";

const Cart = () => {
  const cartItems = useSelector((state: RootState) => state.pizzaList);

  const { cart } = cartItems;

  return (
    <>
      <Header />
      <CartCardContainer>
        <CartCardList cart={cart} />
      </CartCardContainer>
      <Footer />
    </>
  );
};

export default Cart;
