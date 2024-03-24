import { createSlice } from "@reduxjs/toolkit";
import { IUserData } from "../../Interfaces";

const initialState: IUserData = {
  email: "",
  familyName: "",
  givenName: "",
  profileImage: import.meta.env.VITE_DEFAULT_USER_ICON,
  city: "",
  address: "",
  phoneNumber: "",
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
