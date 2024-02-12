import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IFetchPizzas } from "../../Interfaces";
import axios from "axios";

const initialState: IFetchPizzas[] = [
  {
    pizzaId: 0,
    pizzaName: "",
    pizzaDescription: "",
    pizzaBakeType: "",
  },
];

export const fetchPizzas = createAsyncThunk("pizzaFetcher/fetch", async () => {
  try {
    const response = await axios.get(import.meta.env.VITE_GET_ALL_PIZZAS);
    return response.data;
  } catch (error) {
    console.log(error);
  }
});

const fetchPizzaSlice = createSlice({
  name: "pizzaFetcher",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPizzas.fulfilled, (_state, action) => {
      return action.payload;
    });
  },
});

export default fetchPizzaSlice.reducer;
