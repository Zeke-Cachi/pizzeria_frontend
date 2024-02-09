import { StyledPizzaOptions, SecondaryTitle } from "../StyledComponents";
import HightlightedPizzas from "./HightlightedPizzas";
import AllPizzas from "./AllPizzas";

const PizzaOptions = () => {
  return (
    <StyledPizzaOptions>
      <SecondaryTitle size={"3rem"} top={"0"}>
        Choose your pizza
      </SecondaryTitle>

      <SecondaryTitle size={"2rem"} top={"2rem"}>
        Picks of the week
      </SecondaryTitle>

      <HightlightedPizzas />
      <AllPizzas />
    </StyledPizzaOptions>
  );
};

export default PizzaOptions;
