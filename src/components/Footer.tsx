import {
  FooterContainer,
  SocialMediaLinks,
  SocialMediaLinksContainer,
  SocialMediaSection,
  FoodCertificateImg,
} from "../styledComponents/footerStyles";
import { LogoImage } from "../styledComponents/headerStyles";
import logoImg from "../assets/giovannis-pizzeria-high-resolution-logo-transparent.png";
import { SecondaryTitle } from "../styledComponents/utils";
import instagramImg from "../assets/instagram.png";
import facebookImg from "../assets/facebook.png";
import twitterImg from "../assets/twitter.png";
import foodCertificate from "../assets/food-certificate.png";

const Footer = () => {
  return (
    <FooterContainer>
      <LogoImage src={logoImg} alt="company logo" $logoheight="10rem" />
      <SocialMediaSection>
        <SecondaryTitle $fontcolor="white" $top="1rem" $size="1.5rem">
          Follow us on social media
        </SecondaryTitle>
        <SocialMediaLinksContainer>
          <SocialMediaLinks src={instagramImg} alt="instagram link" />
          <SocialMediaLinks src={facebookImg} alt="facebook link" />
          <SocialMediaLinks src={twitterImg} alt="twitter link" />
        </SocialMediaLinksContainer>
      </SocialMediaSection>
      <FoodCertificateImg src={foodCertificate} alt="food certificate" />
    </FooterContainer>
  );
};

export default Footer;
