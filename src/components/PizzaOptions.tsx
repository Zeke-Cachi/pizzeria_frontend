import { StyledPizzaOptions } from "../styledComponents/pizzaOptionsStyles";
import { SecondaryTitle } from "../styledComponents/utils";
import HightlightedPizzas from "./HightlightedPizzas";
import AllPizzas from "./AllPizzas";

const PizzaOptions = () => {
  return (
    <StyledPizzaOptions id="all-pizzas">
      <SecondaryTitle fontcolor="gray" size={"3rem"} top={"0"}>
        Choose your pizza
      </SecondaryTitle>

      <SecondaryTitle fontcolor="gray" size={"2rem"} top={"2rem"}>
        Picks of the week
      </SecondaryTitle>

      <HightlightedPizzas />

      <SecondaryTitle fontcolor="gray" size={"2rem"} top={"5rem"}>
        Our full selection
      </SecondaryTitle>
      <AllPizzas />
    </StyledPizzaOptions>
  );
};

export default PizzaOptions;
