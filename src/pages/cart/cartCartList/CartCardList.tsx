import useCartActions from "../../../customHooks/useCartActions";
import {
  CartAmount,
  CartAmountButtonContainer,
  CartAmountContainer,
  CartCard,
  CartCardButton,
  CartCardImg,
  CartCardPrice,
  CartTitleContainer,
  CartUnitPrice,
  CartUnitPriceContainer,
  PlusTaxSpan,
  Total,
} from "../CartStyles";
import { Button, SecondaryTitle } from "../../../styledComponentsUtils/utils";
import { IFetchPizzas } from "../../../Interfaces";
import useIsMobile from "../../../customHooks/useIsMobile";

const CartCardList: React.FC<{ cart: IFetchPizzas[] }> = ({ cart }) => {
  const { dispatchAddToCart, dispatchRemoveOneFromCart } = useCartActions();
  const isMobile = useIsMobile();

  return (
    <>
      <SecondaryTitle
        $fontcolor="gray"
        $size={isMobile ? "2rem" : "2.8rem"}
        $top="1rem"
        style={{ margin: "0 0 0 2rem" }}
      >
        Your Cart
      </SecondaryTitle>
      {cart.map((cartItem) => {
        return (
          <CartCard key={cartItem.pizzaId}>
            <CartTitleContainer>
              <SecondaryTitle
                $fontcolor="black"
                $size={isMobile ? "1.5rem" : "2rem"}
                $top=".5rem"
              >
                {cartItem.pizzaName}
              </SecondaryTitle>
              <p
                style={{
                  color: "gray",
                  fontWeight: "light",
                  fontStyle: "italic",
                }}
              >
                {isMobile
                  ? cartItem.pizzaDescription.slice(0, 20) + "..."
                  : cartItem.pizzaDescription.slice(0, 35) + "..."}
              </p>
            </CartTitleContainer>

            <CartUnitPriceContainer>
              <p style={{ fontStyle: "italic" }}>Unit price</p>
              <CartUnitPrice>
                ${cartItem.pizzaPrice} <PlusTaxSpan>+ tax</PlusTaxSpan>
              </CartUnitPrice>
            </CartUnitPriceContainer>

            <CartCardImg $img={cartItem.pizzaImg1!}></CartCardImg>
            <CartAmountContainer>
              <CartAmount>{cartItem.pizzaQuantity} pizzas</CartAmount>
              <CartAmountButtonContainer>
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
              </CartAmountButtonContainer>
            </CartAmountContainer>
            <CartCardPrice>
              ${" "}
              {(cartItem.pizzaQuantity * cartItem.pizzaPrice * 1.1).toFixed(2)}
            </CartCardPrice>
          </CartCard>
        );
      })}
      <Total>
        <SecondaryTitle
          $fontcolor="gray"
          $size={isMobile ? "2rem" : "2.8rem"}
          $top="0"
        >
          Total: $
          {(
            cart.reduce((acc, pizza) => {
              return (acc = acc + pizza.pizzaPrice * pizza.pizzaQuantity);
            }, 0) * 1.1
          ).toFixed(2)}
        </SecondaryTitle>
        <Button
          $bgcolor="#ffa07a"
          $buttonwidth={isMobile ? "7rem" : "10rem"}
          $buttonheight={isMobile ? "3rem" : "4rem"}
          $buttonfontsize={isMobile ? "1rem" : "1.5rem"}
        >
          Complete purchase
        </Button>
      </Total>
    </>
  );
};

export default CartCardList;
