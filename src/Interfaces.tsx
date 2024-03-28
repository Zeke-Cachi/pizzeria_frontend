export interface IOnClick {
  onClick?: () => string;
}

export interface IMainOptionsProps {
  $image: string;
  $text: string;
}

export interface Image {
  $image: string;
}

export interface ISecondaryTitle {
  $fontcolor: string;
  $size: string;
  $top: string;
}

export interface IFetchPizzas {
  pizzaId: number;
  pizzaName: string;
  pizzaDescription: string;
  pizzaBakeType: string;
  pizzaPrice: number;
  pizzaQuantity: number;
  pizzaImg1?: string;
  pizzaImg2?: string;
  pizzaImg3?: string;
}

export interface ICart {
  cart: IFetchPizzas[];
  items: IFetchPizzas[];
  totalAmount: number;
}

export interface IStyledButton {
  $buttonmargin?: string;
  $bgcolor: string;
  $buttonwidth?: string;
  $buttonheight?: string;
  $buttonfontsize?: string;
  $fontcolor?: string;
  $border?: string;
}

export interface ICarouselComponent {
  $img1: string;
  $img2: string;
  $img3: string;
  $carouselheight?: string;
  $carouselwidth?: string;
  $paddingtop?: string;
}

export interface IOptionalCarouselStyling {
  $carouselwidth?: string;
  $carouselheight?: string;
}

export interface ICarouselImg {
  $carouselimg: string;
  $paddingtop?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface ILogoImg {
  $logoheight: string;
  $scrollmovement: string;
}

export interface IHighlightedPizzas {
  pepperoniLink: string;
  hawaiianLink: string;
  buffaloLink: string;
}

export interface ILoginContainer {
  $img: string;
}

export interface IHr {
  $width: string;
}

export interface IRegisterData {
  name: string;
  lastname: string;
  email: string;
  password: string;
  phoneNumber?: string;
  address?: string;
  city?: string;
}

export interface IUserData {
  email: string;
  familyName: string;
  givenName: string;
  profileImage: string;
  address?: string;
  city?: string;
  phoneNumber?: string;
}

export interface ICartCounterDisplay {
  $iscartempty: number;
}

export interface ICartCardImg {
  $img: string;
}

export interface IsMobile {
  $ismobile: boolean;
  $isdesktop?: boolean;
}

export interface ICartCounter {
  $cartnumber: number;
}

export interface IHeaderSize {
  $scrollmovement: string;
}
