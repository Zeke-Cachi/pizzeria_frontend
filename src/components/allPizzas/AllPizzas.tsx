import { PizzaCard, PizzaCardContainer, PizzaCardImg } from "./allPizzasStyles";
import { SecondaryTitle, Button } from "../../styledComponentsUtils/utils";
import { IFetchPizzas } from "../../Interfaces";
import { Link } from "react-router-dom";
import useIsMobile from "../../customHooks/useIsMobile";

const AllPizzas: React.FC<{ pizzaList: IFetchPizzas[] }> = ({ pizzaList }) => {
  const isMobile = useIsMobile();

  return (
    <PizzaCardContainer>
      {pizzaList.map((pizza: IFetchPizzas) => (
        <PizzaCard key={pizza.pizzaId}>
          <PizzaCardImg $image={pizza.pizzaImg1!}></PizzaCardImg>
          <SecondaryTitle
            $fontcolor="black"
            $size={isMobile ? "1.2rem" : "1.5rem"}
            $top="1rem"
          >
            {pizza.pizzaName.length > 16
              ? pizza.pizzaName.slice(0, 12) + "..."
              : pizza.pizzaName}
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
            <Button
              $buttonmargin={isMobile ? "0.5rem 0 0 0" : "1rem 0 0 0"}
              $bgcolor="#ffa07a"
            >
              ORDER NOW
            </Button>
          </Link>
        </PizzaCard>
      ))}
    </PizzaCardContainer>
  );
};

export default AllPizzas;
