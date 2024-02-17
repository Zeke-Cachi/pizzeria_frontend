import { StyledPizzaOptions } from "../styledComponents/pizzaOptionsStyles";
import { SecondaryTitle } from "../styledComponents/utils";
import HightlightedPizzas from "./HightlightedPizzas";
import AllPizzas from "./AllPizzas";
import { useEffect } from "react";
import { fetchPizzas } from "../state/slices/FetchPizzaSlice";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../state/store";
import { IFetchPizzas } from "../Interfaces";

const PizzaOptions = () => {
  const dispatch = useDispatch<AppDispatch>();
  const pizzaList: IFetchPizzas[] = useSelector(
    (state: RootState) => state.pizzaList
  );

  useEffect(() => {
    if (pizzaList.length === 1) dispatch(fetchPizzas());
  }, []);

  //HAD TO HARDCODE THESE SINCE I ONLY FOUND THE APPROPIATE IMAGES FOR THESE THREE PIZZAS :/
  const pepperoniLink =
    pizzaList.length > 1
      ? `/pizza/${pizzaList[1].pizzaId}/${pizzaList[1].pizzaName}/${
          pizzaList[1].pizzaDescription
        }/${pizzaList[1].pizzaBakeType}/${
          pizzaList[1].pizzaPrice
        }/${encodeURIComponent(pizzaList[1].pizzaImg1!)}/${encodeURIComponent(
          pizzaList[1].pizzaImg2!
        )}/${encodeURIComponent(pizzaList[1].pizzaImg3!)}`
      : "/";

  const hawaiianLink =
    pizzaList.length > 1
      ? `/pizza/${pizzaList[4].pizzaId}/${pizzaList[4].pizzaName}/${
          pizzaList[4].pizzaDescription
        }/${pizzaList[4].pizzaBakeType}/${
          pizzaList[4].pizzaPrice
        }/${encodeURIComponent(pizzaList[4].pizzaImg1!)}/${encodeURIComponent(
          pizzaList[4].pizzaImg2!
        )}/${encodeURIComponent(pizzaList[4].pizzaImg3!)}`
      : "/";

  const buffaloLink =
    pizzaList.length > 1
      ? `/pizza/${pizzaList[9].pizzaId}/${pizzaList[9].pizzaName}/${
          pizzaList[9].pizzaDescription
        }/${pizzaList[9].pizzaBakeType}/${
          pizzaList[9].pizzaPrice
        }/${encodeURIComponent(pizzaList[9].pizzaImg1!)}/${encodeURIComponent(
          pizzaList[9].pizzaImg2!
        )}/${encodeURIComponent(pizzaList[9].pizzaImg3!)}`
      : "/";

  return (
    <StyledPizzaOptions id="all-pizzas">
      <SecondaryTitle fontcolor="gray" size={"3rem"} top={"0"}>
        Choose your pizza
      </SecondaryTitle>

      <SecondaryTitle fontcolor="gray" size={"2rem"} top={"2rem"}>
        Picks of the week
      </SecondaryTitle>

      <HightlightedPizzas
        pepperoniLink={pepperoniLink}
        hawaiianLink={hawaiianLink}
        buffaloLink={buffaloLink}
      />

      <SecondaryTitle fontcolor="gray" size={"2rem"} top={"5rem"}>
        Our full selection
      </SecondaryTitle>
      <AllPizzas pizzaList={pizzaList} />
    </StyledPizzaOptions>
  );
};

export default PizzaOptions;
