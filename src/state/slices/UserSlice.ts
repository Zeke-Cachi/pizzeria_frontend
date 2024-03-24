import { createSlice } from "@reduxjs/toolkit";
import { IUserData } from "../../Interfaces";
import genericUserIcon from "../../assets/default-user-icon.svg";

const initialState: IUserData = {
  email: "",
  familyName: "",
  givenName: "",
  profileImage: genericUserIcon,
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
