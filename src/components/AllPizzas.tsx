import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../state/store";
import {
  PizzaCard,
  PizzaCardContainer,
  PizzaCardImg,
  SecondaryTitle,
  Button,
} from "../StyledComponents";
import { IFetchPizzas } from "../Interfaces";
import { useEffect } from "react";
import { fetchPizzas } from "../state/slices/FetchPizzaSlice";

const AllPizzas = () => {
  const dispatch = useDispatch<AppDispatch>();
  const pizzaList: IFetchPizzas[] = useSelector(
    (state: RootState) => state.pizzaList
  );

  useEffect(() => {
    if (pizzaList.length === 1) dispatch(fetchPizzas());
  }, []);

  return (
    <PizzaCardContainer>
      {pizzaList.map((pizza: IFetchPizzas) => (
        <PizzaCard key={pizza.pizzaId}>
          <PizzaCardImg image={pizza.pizzaImg1!}></PizzaCardImg>
          <SecondaryTitle fontcolor="black" size="1.5rem" top="1rem">
            {pizza.pizzaName}
          </SecondaryTitle>
          <Button top="1rem" bgcolor="#ffa07a">
            ORDER NOW
          </Button>
        </PizzaCard>
      ))}
    </PizzaCardContainer>
  );
};

export default AllPizzas;
