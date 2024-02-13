import {
  AllStores,
  Store,
  StoreImg,
  StoreInfo,
  StoresContainer,
} from "../styledComponents/storesStyles";
import { SecondaryTitle } from "../styledComponents/utils";
import storeImg from "../assets/pizza-store-1.jpg";

const Stores = () => {
  return (
    <StoresContainer>
      <SecondaryTitle fontcolor="black" top="0rem" size="3rem">
        Our Stores
      </SecondaryTitle>
      <AllStores>
        <Store>
          <StoreImg image={storeImg}></StoreImg>
          <StoreInfo>
            <SecondaryTitle fontcolor="black" top="0rem" size="1.5rem">
              123 Main Street, Philadelphia, PA 19103
            </SecondaryTitle>
            <SecondaryTitle fontcolor="black" top="0rem" size="1.2rem">
              Phone number: (215) 555-1234
            </SecondaryTitle>
          </StoreInfo>
        </Store>
        <Store>
          <StoreImg image={storeImg}></StoreImg>
          <StoreInfo>
            <SecondaryTitle fontcolor="black" top="0rem" size="1.5rem">
              123 Main Street, Philadelphia, PA 19103
            </SecondaryTitle>
            <SecondaryTitle fontcolor="black" top="0rem" size="1.2rem">
              Phone number: (215) 555-1234
            </SecondaryTitle>
          </StoreInfo>
        </Store>
      </AllStores>
    </StoresContainer>
  );
};

export default Stores;
