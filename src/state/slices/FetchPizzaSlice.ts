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

const fetchPizzaSlice = createSlice({
  name: "pizzaFetcher",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPizzas.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const fetchPizzas = createAsyncThunk("pizzaFetcher/fetch", async () => {
  try {
    const response = await axios.get("http://localhost:8080/api/v1/pizzas");
    return response.data;
  } catch (error) {
    console.log(error);
  }
});

export default fetchPizzaSlice.reducer;
