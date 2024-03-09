import { createSlice } from "@reduxjs/toolkit";
import { IUserData } from "../../Interfaces";

const initialState: IUserData = {
  email: "",
  lastname: "",
  name: "",
  profileImage: "",
};

const fetchUserData = createSlice({
  name: "userDataFetcher",
  initialState,
  reducers: {
    storeUserData: (state, action) => {
      if (state.email !== "") return state;
      return { ...state, ...action.payload };
    },
  },
});

export const { storeUserData } = fetchUserData.actions;
export default fetchUserData.reducer;
