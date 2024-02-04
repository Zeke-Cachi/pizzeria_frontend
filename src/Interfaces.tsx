export interface IOnClick {
  onClick?: () => string;
}

export interface IMainOptionsProps {
  image: string;
  text: string;
}

export interface StyledMainOptionsCardTopProps {
  image: string;
}

export interface IPizzaContext {}

export interface IFetchPizzas {
  pizzaId: number;
  pizzaName: string;
  pizzaDescription: string;
  pizzaBakeType: string;
}
