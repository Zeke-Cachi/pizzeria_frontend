import { useDispatch } from "react-redux";
import {
  addToCart,
  removeOneFromCart,
  removeAllFromCart,
  removeAllOfOneFromCart,
} from "../state/slices/CartSlice";
import { AppDispatch } from "../state/store";

const useCartActions = () => {
  const dispatch = useDispatch<AppDispatch>();

  const dispatchAddToCart = (id: number) => {
    dispatch(addToCart(id));
  };

  const dispatchRemoveOneFromCart = (id: number) => {
    dispatch(removeOneFromCart(id));
  };

  const dispatchRemoveAllFromCart = () => {
    dispatch(removeAllFromCart());
  };

  const dispatchRemoveAllOfOneFromCart = (id: number) => {
    dispatch(removeAllOfOneFromCart(id));
  };

  return {
    useCartActions: useCartActions,
    dispatchAddToCart: dispatchAddToCart,
    dispatchRemoveOneFromCart: dispatchRemoveOneFromCart,
    dispatchRemoveAllFromCart: dispatchRemoveAllFromCart,
    dispatchRemoveAllOfOneFromCart: dispatchRemoveAllOfOneFromCart,
  };
};

export default useCartActions;
