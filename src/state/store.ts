import { configureStore } from "@reduxjs/toolkit";
import fetchPizzaSlice from "./slices/FetchPizzaSlice";

export const store = configureStore({
  reducer: { pizzaList: fetchPizzaSlice },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
