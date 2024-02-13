import {
  AllStores,
  Store,
  StoresContainer,
} from "../styledComponents/storesStyles";
import { SecondaryTitle } from "../styledComponents/utils";

const Stores = () => {
  return (
    <StoresContainer>
      <SecondaryTitle fontcolor="white" top="0rem" size="2.5rem">
        Our Stores
      </SecondaryTitle>
      <AllStores>
        <Store></Store>
        <Store></Store>
      </AllStores>
    </StoresContainer>
  );
};

export default Stores;
