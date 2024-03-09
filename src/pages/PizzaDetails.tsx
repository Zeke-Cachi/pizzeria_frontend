import { useParams } from "react-router-dom";
import {
  PizzaData,
  PizzaDetailsContainer,
  PizzaDetailsDescription,
  PizzaDetailsMainCard,
  PizzaDetailsPrice,
} from "../styledComponents/pizzaDetailsStyles";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CarouselComponent from "../components/CarouselComponent";
import { Button, SecondaryTitle } from "../styledComponents/utils";
import { useSelector } from "react-redux";
import { RootState } from "../state/store";
import useCartActions from "../customHooks/useCartActions";

const PizzaDetails = () => {
  const {
    id,
    pizzaName,
    pizzaDescription,
    pizzaBakeType,
    pizzaPrice,
    pizzaImg1,
    pizzaImg2,
    pizzaImg3,
  } = useParams();

  const bakeType = pizzaBakeType?.replace("_", " ");

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const cart = useSelector((state: RootState) => state.pizzaList);

  const { dispatchAddToCart } = useCartActions();

  return (
    <>
      <Header />
      <PizzaDetailsContainer>
        <PizzaDetailsMainCard>
          <CarouselComponent
            $img1={pizzaImg1!}
            $img2={pizzaImg2!}
            $img3={pizzaImg3!}
            $carouselHeight="100%"
            $carouselWidth="50%"
            $paddingtop="100%"
          />
          <PizzaData>
            <div>
              <SecondaryTitle $fontcolor="black" $size="3rem" $top="2rem">
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
              $buttonwidth="12rem"
              $buttonfontsize="1.2rem"
              onClick={() => dispatchAddToCart(Number(id))}
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
