import { createContext, useEffect } from "react";
import { IPizzaContext, IFetchPizzas } from "../Interfaces";
import axios from "axios";

export const PizzaContext = createContext<IPizzaContext>({});

const PizzaProvider = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    const fetchPizzas = async () => {
      const response: IFetchPizzas = await axios.get(
        import.meta.env.VITE_GET_ALL_PIZZAS
      );
      console.log(response);
    };
    fetchPizzas();
  }, []);

  return <PizzaContext.Provider value={{}}>{children}</PizzaContext.Provider>;
};

export default PizzaProvider;
