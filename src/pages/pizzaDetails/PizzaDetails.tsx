import { useParams } from "react-router-dom";
import {
  PizzaData,
  PizzaDetailsContainer,
  PizzaDetailsDescription,
  PizzaDetailsMainCard,
  PizzaDetailsPrice,
} from "./pizzaDetailsStyles";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import CarouselComponent from "../../components/carouselComponent/CarouselComponent";
import { Button, SecondaryTitle } from "../../styledComponentsUtils/utils";
import useCartActions from "../../customHooks/useCartActions";

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
  const { dispatchAddToCart } = useCartActions();

  const storeCartData = async (id: string) => {
    dispatchAddToCart(Number(id));
  };

  return (
    <>
      <Header />
      <PizzaDetailsContainer>
        <PizzaDetailsMainCard>
          <CarouselComponent
            $img1={pizzaImg1!}
            $img2={pizzaImg2!}
            $img3={pizzaImg3!}
            $carouselheight="100%"
            $carouselwidth="50%"
            $paddingtop="100%"
            $ismaincarousel={false}
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
