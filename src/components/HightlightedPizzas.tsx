import peperonni from "../assets/peperonni-presentation.png";
import buffalo from "../assets/buffalo-wing-presentation.png";
import hawaii from "../assets/Hawaiian-presentation.png";
import {
  MainPizzaPresentationCard,
  MainPizzaOptionsCardContainer,
  MainPizzaPresentationCardImg,
  MainPizzaPresentationCardLower,
} from "../styledComponents/highlightedPizzasStyles";
import { Button } from "../styledComponents/utils";
import { IHighlightedPizzas } from "../Interfaces";
import { Link } from "react-router-dom";

const HightlightedPizzas: React.FC<IHighlightedPizzas> = ({
  pepperoniLink,
  hawaiianLink,
  buffaloLink,
}) => {
  //HAD TO HARDCODE THESE SINCE I ONLY FOUND 3 IMAGES SUITABLE FOR THE HIGHTLIGHTED PIZZAS UI :/

  return (
    <MainPizzaOptionsCardContainer>
      <MainPizzaPresentationCard>
        <MainPizzaPresentationCardImg
          src={peperonni}
          alt="image of a peperonni pizza"
        />
        <MainPizzaPresentationCardLower>
          <p>PEPERONNI</p>

          <Link to={pepperoniLink}>
            <Button bgcolor="#ffa07a" top="0rem">
              ORDER NOW
            </Button>
          </Link>
        </MainPizzaPresentationCardLower>
      </MainPizzaPresentationCard>

      <MainPizzaPresentationCard>
        <MainPizzaPresentationCardImg
          src={hawaii}
          alt="image of a hawaiian-style pizza"
        />
        <MainPizzaPresentationCardLower>
          <p>HAWAIIAN</p>
          <Link to={hawaiianLink}>
            <Button bgcolor="#ffa07a" top="0rem">
              ORDER NOW
            </Button>
          </Link>
        </MainPizzaPresentationCardLower>
      </MainPizzaPresentationCard>

      <MainPizzaPresentationCard>
        <MainPizzaPresentationCardImg
          src={buffalo}
          alt="image of a buffalo chicken pizza"
        />
        <MainPizzaPresentationCardLower>
          <p>BUFFALO CHICKEN</p>
          <Link to={buffaloLink}>
            <Button bgcolor="#ffa07a" top="0rem">
              ORDER NOW
            </Button>
          </Link>
        </MainPizzaPresentationCardLower>
      </MainPizzaPresentationCard>
    </MainPizzaOptionsCardContainer>
  );
};

export default HightlightedPizzas;
