import peperonni from "../assets/peperonni-presentation.png";
import buffalo from "../assets/buffalo-wing-presentation.png";
import hawaii from "../assets/Hawaiian-presentation.png";
import {
  MainPizzaPresentationCard,
  MainPizzaOptionsCardContainer,
  MainPizzaPresentationCardImg,
  MainPizzaPresentationCardLower,
  Button,
} from "../StyledComponents";

const HightlightedPizzas = () => {
  return (
    <MainPizzaOptionsCardContainer>
      <MainPizzaPresentationCard>
        <MainPizzaPresentationCardImg
          src={peperonni}
          alt="image of a peperonni pizza"
        />
        <MainPizzaPresentationCardLower>
          <p>PEPERONNI PIZZA</p>
          <Button bgcolor="#ffa07a" top="0rem">
            ORDER NOW
          </Button>
        </MainPizzaPresentationCardLower>
      </MainPizzaPresentationCard>

      <MainPizzaPresentationCard>
        <MainPizzaPresentationCardImg
          src={hawaii}
          alt="image of a hawaiian-style pizza"
        />
        <MainPizzaPresentationCardLower>
          <p>HAWAIIAN PIZZA</p>
          <Button bgcolor="#ffa07a" top="0rem">
            ORDER NOW
          </Button>
        </MainPizzaPresentationCardLower>
      </MainPizzaPresentationCard>

      <MainPizzaPresentationCard>
        <MainPizzaPresentationCardImg
          src={buffalo}
          alt="image of a buffalo wing pizza"
        />
        <MainPizzaPresentationCardLower>
          <p>BUFFALO WING PIZZA</p>
          <Button bgcolor="#ffa07a" top="0rem">
            ORDER NOW
          </Button>
        </MainPizzaPresentationCardLower>
      </MainPizzaPresentationCard>
    </MainPizzaOptionsCardContainer>
  );
};

export default HightlightedPizzas;
