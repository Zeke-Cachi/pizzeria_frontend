import { StyledPizzaOptions } from "./pizzaOptionsStyles";
import { SecondaryTitle } from "../../styledComponentsUtils/utils";
import HightlightedPizzas from "../highlightedPizzas/HightlightedPizzas";
import AllPizzas from "../allPizzas/AllPizzas";
import { ICart } from "../../Interfaces";
import useIsMobile from "../../customHooks/useIsMobile";

const PizzaOptions: React.FC<{ pizzaList: ICart }> = ({ pizzaList }) => {
  const isMobile = useIsMobile();

  //HAD TO HARDCODE THESE SINCE I ONLY FOUND THE APPROPIATE IMAGES FOR THESE THREE PIZZAS :/
  const pepperoniLink =
    pizzaList.items.length > 1
      ? `/pizza/${pizzaList.items[1].pizzaId}/${pizzaList.items[1].pizzaName}/${
          pizzaList.items[1].pizzaDescription
        }/${pizzaList.items[1].pizzaBakeType}/${
          pizzaList.items[1].pizzaPrice
        }/${encodeURIComponent(
          pizzaList.items[1].pizzaImg1!
        )}/${encodeURIComponent(
          pizzaList.items[1].pizzaImg2!
        )}/${encodeURIComponent(pizzaList.items[1].pizzaImg3!)}`
      : "/";

  const hawaiianLink =
    pizzaList.items.length > 1
      ? `/pizza/${pizzaList.items[4].pizzaId}/${pizzaList.items[4].pizzaName}/${
          pizzaList.items[4].pizzaDescription
        }/${pizzaList.items[4].pizzaBakeType}/${
          pizzaList.items[4].pizzaPrice
        }/${encodeURIComponent(
          pizzaList.items[4].pizzaImg1!
        )}/${encodeURIComponent(
          pizzaList.items[4].pizzaImg2!
        )}/${encodeURIComponent(pizzaList.items[4].pizzaImg3!)}`
      : "/";

  const buffaloLink =
    pizzaList.items.length > 1
      ? `/pizza/${pizzaList.items[9].pizzaId}/${pizzaList.items[9].pizzaName}/${
          pizzaList.items[9].pizzaDescription
        }/${pizzaList.items[9].pizzaBakeType}/${
          pizzaList.items[9].pizzaPrice
        }/${encodeURIComponent(
          pizzaList.items[9].pizzaImg1!
        )}/${encodeURIComponent(
          pizzaList.items[9].pizzaImg2!
        )}/${encodeURIComponent(pizzaList.items[9].pizzaImg3!)}`
      : "/";

  return (
    <StyledPizzaOptions id="all-pizzas">
      <SecondaryTitle
        $fontcolor="gray"
        $size={isMobile ? "2rem" : "3rem"}
        $top={"0"}
      >
        Choose your pizza
      </SecondaryTitle>

      <SecondaryTitle
        $fontcolor="gray"
        $size={isMobile ? "1.5rem" : "2rem"}
        $top={"2rem"}
      >
        Picks of the week
      </SecondaryTitle>

      <HightlightedPizzas
        pepperoniLink={pepperoniLink}
        hawaiianLink={hawaiianLink}
        buffaloLink={buffaloLink}
      />

      <SecondaryTitle
        $fontcolor="gray"
        $size={isMobile ? "1.5rem" : "2rem"}
        $top={isMobile ? "2rem" : "5rem"}
      >
        Our full selection
      </SecondaryTitle>
      <AllPizzas pizzaList={pizzaList.items} />
    </StyledPizzaOptions>
  );
};

export default PizzaOptions;
