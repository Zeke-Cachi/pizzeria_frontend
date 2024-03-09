import { configureStore } from "@reduxjs/toolkit";
import fetchPizzaSlice from "./slices/CartSlice";
import fetchUserData from "./slices/UserSlice";

export const store = configureStore({
  reducer: {
    pizzaList: fetchPizzaSlice,
    userData: fetchUserData,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
