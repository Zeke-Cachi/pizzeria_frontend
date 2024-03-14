import { CartCardContainer } from "./CartStyles";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import CartCardList from "./cartCartList/CartCardList";

const Cart = () => {
  return (
    <>
      <Header />
      <CartCardContainer>
        <CartCardList />
      </CartCardContainer>
      <Footer />
    </>
  );
};

export default Cart;
