import { StyledPizzaOptions, SecondaryTitle } from "../StyledComponents";
import HightlightedPizzas from "./HightlightedPizzas";
import AllPizzas from "./AllPizzas";

const PizzaOptions = () => {
  return (
    <StyledPizzaOptions>
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
