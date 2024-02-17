import {
  PizzaCard,
  PizzaCardContainer,
  PizzaCardImg,
} from "../styledComponents/allPizzasStyles";
import { SecondaryTitle, Button } from "../styledComponents/utils";
import { IFetchPizzas } from "../Interfaces";
import { Link } from "react-router-dom";

const AllPizzas: React.FC<{ pizzaList: IFetchPizzas[] }> = ({ pizzaList }) => {
  return (
    <PizzaCardContainer>
      {pizzaList.map((pizza: IFetchPizzas) => (
        <PizzaCard key={pizza.pizzaId}>
          <PizzaCardImg image={pizza.pizzaImg1!}></PizzaCardImg>
          <SecondaryTitle fontcolor="black" size="1.5rem" top="1rem">
            {pizza.pizzaName}
          </SecondaryTitle>
          <Link
            to={`/pizza/${pizza.pizzaId}/${pizza.pizzaName}/${
              pizza.pizzaDescription
            }/${pizza.pizzaBakeType}/${pizza.pizzaPrice}/${encodeURIComponent(
              pizza.pizzaImg1!
            )}/${encodeURIComponent(pizza.pizzaImg2!)}/${encodeURIComponent(
              pizza.pizzaImg3!
            )}`}
          >
            <Button buttonmargin="1rem 0 0 0" bgcolor="#ffa07a">
              ORDER NOW
            </Button>
          </Link>
        </PizzaCard>
      ))}
    </PizzaCardContainer>
  );
};

export default AllPizzas;
