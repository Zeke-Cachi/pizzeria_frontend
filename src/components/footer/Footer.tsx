import {
  FooterContainer,
  SocialMediaLinks,
  SocialMediaLinksContainer,
  SocialMediaSection,
  FoodCertificateImg,
} from "./footerStyles";
import { LogoImage } from "../header/headerStyles";
import logoImg from "../../assets/giovannis-pizzeria-high-resolution-logo-transparent.png";
import { SecondaryTitle } from "../../styledComponentsUtils/utils";
import instagramImg from "../../assets/instagram.png";
import facebookImg from "../../assets/facebook.png";
import twitterImg from "../../assets/twitter.png";
import foodCertificate from "../../assets/food-certificate.png";
import useIsMobile from "../../customHooks/useIsMobile";

const Footer = () => {
  const isMobile = useIsMobile();

  return (
    <FooterContainer>
      <LogoImage
        src={logoImg}
        alt="company logo"
        $logoheight={isMobile ? "5rem" : "10rem"}
      />
      <SocialMediaSection>
        <SecondaryTitle
          $fontcolor="white"
          $top="1rem"
          $size={isMobile ? "1rem" : "1.5rem"}
        >
          Follow us on social media
        </SecondaryTitle>
        <SocialMediaLinksContainer>
          <SocialMediaLinks src={instagramImg} alt="instagram link" />
          <SocialMediaLinks src={facebookImg} alt="facebook link" />
          <SocialMediaLinks src={twitterImg} alt="twitter link" />
        </SocialMediaLinksContainer>
      </SocialMediaSection>
      <FoodCertificateImg
        src={foodCertificate}
        alt="food certificate"
        $ismobile={isMobile}
      />
    </FooterContainer>
  );
};

export default Footer;
