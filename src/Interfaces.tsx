export interface IOnClick {
  onClick?: () => string;
}

export interface IMainOptionsProps {
  image: string;
  text: string;
}

export interface Image {
  image: string;
}

export interface ISecondaryTitle {
  fontcolor: string;
  size: string;
  top: string;
}

export interface IFetchPizzas {
  pizzaId: number;
  pizzaName: string;
  pizzaDescription: string;
  pizzaBakeType: string;
  pizzaImg1?: string;
  pizzaImg2?: string;
  pizzaImg3?: string;
}

export interface IStyledButton {
  top: string;
  bgcolor: string;
}

export interface ICarouselImg {
  carouselimg: string;
}

export interface IAbridgedInput {}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}
