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
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../state/store";
import { addToCart } from "../state/slices/CartSlice";
import { useEffect } from "react";

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

  const dispatch = useDispatch<AppDispatch>();
  const cart = useSelector((state: RootState) => state.pizzaList);

  const dispatchAddToCart = (id: number) => {
    dispatch(addToCart(id));
  };

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  return (
    <>
      <Header />
      <PizzaDetailsContainer>
        <PizzaDetailsMainCard>
          <CarouselComponent
            img1={pizzaImg1!}
            img2={pizzaImg2!}
            img3={pizzaImg3!}
            carouselHeight="100%"
            carouselWidth="50%"
            paddingtop="100%"
          />
          <PizzaData>
            <div>
              <SecondaryTitle fontcolor="black" size="3rem" top="2rem">
                {pizzaName}
              </SecondaryTitle>
              <p>{bakeType}</p>
            </div>

            <PizzaDetailsDescription>
              {pizzaDescription}
            </PizzaDetailsDescription>
            <PizzaDetailsPrice>${pizzaPrice}</PizzaDetailsPrice>
            <Button
              buttonmargin="2rem auto 0"
              bgcolor="#ffa07a"
              buttonheight="4rem"
              buttonwidth="11rem"
              buttonfontsize="1.2rem"
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
