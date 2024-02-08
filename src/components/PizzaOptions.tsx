import { StyledPizzaOptions, SecondaryTitle } from "../StyledComponents";
import HightlightedPizzas from "./HightlightedPizzas";

const PizzaOptions = () => {
  return (
    <StyledPizzaOptions>
      <SecondaryTitle size={"3rem"} marginTop={"0"}>
        Choose your pizza
      </SecondaryTitle>

      <SecondaryTitle size={"2rem"} marginTop={"2rem"}>
        Picks of the week
      </SecondaryTitle>

      <HightlightedPizzas />
    </StyledPizzaOptions>
  );
};

export default PizzaOptions;
