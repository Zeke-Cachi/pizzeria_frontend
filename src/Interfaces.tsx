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

export interface ISecondaryTitle {
  size: string;
  top: string;
}

export interface IPizzaContext {}

export interface IFetchPizzas {
  pizzaId: number;
  pizzaName: string;
  pizzaDescription: string;
  pizzaBakeType: string;
  pizzaImg1?: string;
  pizzaImg2?: string;
  pizzaImg3?: string;
}
