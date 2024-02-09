import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../state/store";
import { PizzaCard, PizzaCardContainer } from "../StyledComponents";
import { IFetchPizzas } from "../Interfaces";

const AllPizzas = () => {
  const dispatch = useDispatch<AppDispatch>();
  console.log(dispatch);
  const pizzaList: IFetchPizzas[] = useSelector(
    (state: RootState) => state.pizzaList
  );

  return (
    <PizzaCardContainer>
      {pizzaList.map((pizza: IFetchPizzas) => (
        <PizzaCard>{pizza.pizzaName}</PizzaCard>
      ))}
    </PizzaCardContainer>
  );
};

export default AllPizzas;
