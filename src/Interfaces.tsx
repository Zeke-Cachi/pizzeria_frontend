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
  pizzaPrice: number;
  pizzaImg1?: string;
  pizzaImg2?: string;
  pizzaImg3?: string;
}

export interface IStyledButton {
  buttonmargin?: string;
  bgcolor: string;
  buttonwidth?: string;
  buttonheight?: string;
  buttonfontsize?: string;
}

export interface ICarouselComponent {
  img1: string;
  img2: string;
  img3: string;
  carouselHeight?: string;
  carouselWidth?: string;
  paddingtop?: string;
}

export interface IOptionalCarouselStyling {
  carouselwidth?: string;
  carouselheight?: string;
}

export interface ICarouselImg {
  carouselimg: string;
  paddingtop?: string;
}

export interface IAbridgedInput {}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface ILogoImg {
  logoheight: string;
}

export interface IHighlightedPizzas {
  pepperoniLink: string;
  hawaiianLink: string;
  buffaloLink: string;
}
