import MainOptionsCard from "./MainOptionsCard";
import {
  StyledMainOptions,
  MainOptionsBanner,
  MainOptionsContainer,
} from "../styledComponents/mainOptionsStyles";
import image1 from "../assets/main-options-card-img-1.avif";
import image2 from "../assets/main-options-card-img-2.jpg";
import image3 from "../assets/main-options-card-img-3.jpg";
import banner from "../assets/main-options-banner.png";

const MainOptions = () => {
  return (
    <StyledMainOptions>
      <MainOptionsContainer>
        <MainOptionsCard image={image1} text="HANDMADE PIZZAS" />
        <MainOptionsCard image={image2} text="TRY OUR NEW FLAVOURS" />
        <MainOptionsCard image={image3} text="HALF-HOUR DELIVERIES" />
      </MainOptionsContainer>
      <MainOptionsContainer>
        <MainOptionsBanner src={banner} alt="banner from main section" />
      </MainOptionsContainer>
    </StyledMainOptions>
  );
};

export default MainOptions;
