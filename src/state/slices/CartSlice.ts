import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ICart } from "../../Interfaces";
import axios from "axios";

const initialState: ICart = {
  cart: [],
  items: [],
  totalAmount: 0,
};

export const fetchPizzas = createAsyncThunk("pizzaFetcher/fetch", async () => {
  try {
    const response = await axios.get(import.meta.env.VITE_GET_ALL_PIZZAS);
    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error("there was an error fetching the data");
  }
});

const fetchPizzaSlice = createSlice({
  name: "pizzaFetcher",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const potentialItem = state.items.find(
        (item) => item.pizzaId === action.payload
      );
      if (potentialItem) {
        const isItemInCart = state.cart.find(
          (item) => item.pizzaId === potentialItem.pizzaId
        );
        if (isItemInCart) {
          state.cart = state.cart.map((item) =>
            item.pizzaId === isItemInCart.pizzaId
              ? { ...item, pizzaQuantity: item.pizzaQuantity + 1 }
              : item
          );
        } else {
          state.cart = [...state.cart, { ...potentialItem, pizzaQuantity: 1 }];
        }
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPizzas.fulfilled, (state, action) => {
      state.items = action.payload;
    });
  },
});

export const { addToCart } = fetchPizzaSlice.actions;
export default fetchPizzaSlice.reducer;
