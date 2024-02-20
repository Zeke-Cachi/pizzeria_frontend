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
    removeOneFromCart: (state, action) => {
      const itemIndex = state.cart.findIndex(
        (item) => item.pizzaId === action.payload
      );
      if (itemIndex !== -1) {
        const itemToRemove = state.cart[itemIndex];
        if (itemToRemove.pizzaQuantity > 1) {
          state.cart[itemIndex].pizzaQuantity -= 1;
        } else {
          state.cart.splice(itemIndex, 1);
        }
      }
    },
    removeAllOfOneFromCart: (state, action) => {
      const isItemInCart = state.cart.find(
        (item) => item.pizzaId === action.payload
      );
      if (isItemInCart) {
        state.cart = state.cart.filter(
          (item) => item.pizzaId !== isItemInCart.pizzaId
        );
      }
    },
    removeAllFromCart: (state) => {
      state.cart = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPizzas.fulfilled, (state, action) => {
      state.items = action.payload;
    });
  },
});

export const {
  addToCart,
  removeOneFromCart,
  removeAllOfOneFromCart,
  removeAllFromCart,
} = fetchPizzaSlice.actions;
export default fetchPizzaSlice.reducer;
