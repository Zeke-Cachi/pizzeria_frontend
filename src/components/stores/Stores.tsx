import {
  AllStores,
  Store,
  StoreImg,
  StoreInfo,
  StoresContainer,
} from "./storesStyles";
import { SecondaryTitle } from "../../styledComponentsUtils/utils";
import storeImg1 from "../../assets/pizza-store-1.jpg";
import storeImg2 from "../../assets/pizza-store-2.webp";

const Stores = () => {
  return (
    <StoresContainer id="stores">
      <SecondaryTitle $fontcolor="black" $top="0rem" $size="3rem">
        Our Stores
      </SecondaryTitle>
      <AllStores>
        <Store>
          <StoreImg $image={storeImg1}></StoreImg>
          <StoreInfo>
            <SecondaryTitle $fontcolor="black" $top="0rem" $size="1.5rem">
              123 Main Street, Philadelphia, PA 19103
            </SecondaryTitle>
            <SecondaryTitle $fontcolor="black" $top="0rem" $size="1.2rem">
              Phone number: (215) 555-1234
            </SecondaryTitle>
          </StoreInfo>
        </Store>
        <Store>
          <StoreImg $image={storeImg2}></StoreImg>
          <StoreInfo>
            <SecondaryTitle $fontcolor="black" $top="0rem" $size="1.5rem">
              123 Main Street, Boston, MA 02108
            </SecondaryTitle>
            <SecondaryTitle $fontcolor="black" $top="0rem" $size="1.2rem">
              Phone number: (617) 555-1234
            </SecondaryTitle>
          </StoreInfo>
        </Store>
      </AllStores>
    </StoresContainer>
  );
};

export default Stores;
