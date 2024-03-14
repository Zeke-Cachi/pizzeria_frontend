import { useSelector } from "react-redux";
import useCartActions from "../../../customHooks/useCartActions";
import { RootState } from "../../../state/store";
import {
  CartAmount,
  CartCard,
  CartCardButton,
  CartCardImg,
  CartCardPrice,
  CartTitleContainer,
  CartUnitPrice,
  CartUnitPriceContainer,
} from "../CartStyles";
import { SecondaryTitle } from "../../../styledComponentsUtils/utils";

const CartCardList = () => {
  const cartItems = useSelector((state: RootState) => state.pizzaList);

  const { cart } = cartItems;

  const { dispatchAddToCart, dispatchRemoveOneFromCart } = useCartActions();

  return (
    <>
      <SecondaryTitle
        $fontcolor="gray"
        $size="2.5rem"
        $top="1rem"
        style={{ margin: "0 0 0 2rem" }}
      >
        Your Cart
      </SecondaryTitle>
      {cart.map((cartItem) => {
        return (
          <CartCard>
            <CartTitleContainer>
              <SecondaryTitle $fontcolor="black" $size="2rem" $top=".5rem">
                {cartItem.pizzaName}
              </SecondaryTitle>
              <p>{cartItem.pizzaDescription.slice(0, 35) + "..."}</p>
            </CartTitleContainer>

            <CartUnitPriceContainer>
              <p style={{ fontStyle: "italic" }}>Unit price</p>
              <CartUnitPrice>${cartItem.pizzaPrice}</CartUnitPrice>
            </CartUnitPriceContainer>
            <CartCardImg $img={cartItem.pizzaImg1!}></CartCardImg>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "1rem",
              }}
            >
              <CartAmount>{cartItem.pizzaQuantity} pizzas</CartAmount>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: ".5rem",
                }}
              >
                <CartCardButton
                  onClick={() => {
                    dispatchAddToCart(cartItem.pizzaId);
                  }}
                >
                  +
                </CartCardButton>
                <CartCardButton
                  onClick={() => {
                    dispatchRemoveOneFromCart(cartItem.pizzaId);
                  }}
                >
                  -
                </CartCardButton>
              </div>
            </div>
            <CartCardPrice>
              $ {(cartItem.pizzaQuantity * cartItem.pizzaPrice).toFixed(2)}
            </CartCardPrice>
          </CartCard>
        );
      })}
    </>
  );
};

export default CartCardList;
