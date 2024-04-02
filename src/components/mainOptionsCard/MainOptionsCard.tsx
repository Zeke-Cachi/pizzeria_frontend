import {
  StyledMainOptionsCard,
  StyledMainOptionsCardTop,
  StyledMainOptionsCardBottom,
} from "./mainOptionsCardStyles";
import { IMainOptionsProps } from "../../Interfaces";

const MainOptionsCard: React.FC<IMainOptionsProps> = ({
  $image,
  $text,
  $width,
  $gridspan,
}) => {
  return (
    <StyledMainOptionsCard $width={$width} $gridspan={$gridspan}>
      <StyledMainOptionsCardTop $image={$image}></StyledMainOptionsCardTop>

      <StyledMainOptionsCardBottom>{$text}</StyledMainOptionsCardBottom>
    </StyledMainOptionsCard>
  );
};

export default MainOptionsCard;
