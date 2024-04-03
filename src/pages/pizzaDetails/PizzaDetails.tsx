import { useParams } from "react-router-dom";
import {
  PizzaData,
  PizzaDetailsContainer,
  PizzaDetailsDescription,
  PizzaDetailsMainCard,
  PizzaDetailsPrice,
  PizzaImg,
} from "./pizzaDetailsStyles";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { Button, SecondaryTitle } from "../../styledComponentsUtils/utils";
import useCartActions from "../../customHooks/useCartActions";
import useIsMobile from "../../customHooks/useIsMobile";

const PizzaDetails = () => {
  const {
    id,
    pizzaName,
    pizzaDescription,
    pizzaBakeType,
    pizzaPrice,
    pizzaImg1,
  } = useParams();

  const bakeType = pizzaBakeType?.replace("_", " ");
  const { dispatchAddToCart } = useCartActions();

  const storeCartData = async (id: string) => {
    dispatchAddToCart(Number(id));
  };

  const isMobile = useIsMobile();

  return (
    <>
      <Header />
      <PizzaDetailsContainer>
        <PizzaDetailsMainCard>
          <PizzaImg $image={pizzaImg1!}></PizzaImg>
          <PizzaData>
            <div>
              <SecondaryTitle
                $fontcolor="black"
                $size={isMobile ? "1.7rem" : "3rem"}
                $top="2rem"
              >
                {pizzaName}
              </SecondaryTitle>
              <p>{bakeType}</p>
            </div>
            <PizzaDetailsDescription>
              {pizzaDescription}
            </PizzaDetailsDescription>
            <PizzaDetailsPrice>${pizzaPrice}</PizzaDetailsPrice>
            <Button
              $buttonmargin="2rem auto 0"
              $bgcolor="#ffa07a"
              $buttonheight="4rem"
              $buttonwidth="10rem"
              $buttonfontsize="1.2rem"
              onClick={() => storeCartData(id!)}
            >
              Add to cart
            </Button>
          </PizzaData>
        </PizzaDetailsMainCard>
      </PizzaDetailsContainer>
      <Footer />
    </>
  );
};

export default PizzaDetails;
