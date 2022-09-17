import { createSlice } from "@reduxjs/toolkit";
import uuid from "react-uuid";

export const employee = createSlice({
  name: "employee",
  initialState: {
    empData: [
      {
        key: 1,
        Email: "Erica@test.com",
        FirstName: "Erica",
        LastName: "Smith",
        LoadedCost: "35",
      },
      {
        key: 2,
        Email: "Ellise@test.com",
        FirstName: "Ellise",
        LastName: "Wheeler",
        LoadedCost: "31",
      },
      {
        key: 3,
        Email: "Edward@test.com",
        FirstName: "Edward",
        LastName: "Kenway",
        LoadedCost: "50",
      },
    ],
  },
  reducers: {
    increment: (state, action) => {
      state.empData.push(action.payload);
    },
    editing: (state, action) => {
      console.log(action.payload);
      state.empData = state.empData.map((obj) => {
        if (obj.key === action.payload.key) {
          return {
            ...obj,
            FirstName: action.payload.FirstName,
            LastName: action.payload.LastName,
            Email: action.payload.Email,
            LoadedCost: action.payload.LoadedCost,
          };
        }

        // 👇️ otherwise return object as is
        return obj;
      });
    },
    decrement: (state, action) => {
      state.empData = state.empData.filter((val) => val.key !== action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, editing } = employee.actions;

export default employee.reducer;
