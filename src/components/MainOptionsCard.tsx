import {
  StyledMainOptionsCard,
  StyledMainOptionsCardTop,
  StyledMainOptionsCardBottom,
} from "../styledComponents/mainOptionsCardStyles";
import { IMainOptionsProps } from "../Interfaces";

const MainOptionsCard: React.FC<IMainOptionsProps> = ({ $image, $text }) => {
  return (
    <StyledMainOptionsCard>
      <StyledMainOptionsCardTop $image={$image}></StyledMainOptionsCardTop>

      <StyledMainOptionsCardBottom>{$text}</StyledMainOptionsCardBottom>
    </StyledMainOptionsCard>
  );
};

export default MainOptionsCard;
