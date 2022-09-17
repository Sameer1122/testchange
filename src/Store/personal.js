import { createSlice } from "@reduxjs/toolkit";
import uuid from "react-uuid";

export const personal = createSlice({
  name: "personal",
  initialState: {
    key: 1,
    Email: "Erica@test.com",
    FirstName: "Erica",
    LastName: "Smith",
    phone: "+99012309121",
    permission: "Adminstrator",
    language: "english",
    image: "",
  },
  reducers: {
    editing: (state, action) => {
      state.language = action.payload.language;
      state.image = action.payload.image;
    },
  },
});

// Action creators are generated for each case reducer function
export const { editing } = personal.actions;

export default personal.reducer;
