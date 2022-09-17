import { createSlice } from "@reduxjs/toolkit";

export const roles = createSlice({
  name: "roles",
  initialState: [],
  reducers: {
    increment: (state, action) => {
      const data = {
        GroupText: action.payload.GroupText,
        GroupId: action.payload.GroupId,
        GroupColor: action.payload.GroupColor,
        Name: action.payload.name,
        Id: state.length + 1,
        type: action.payload.type,
        count: 1,
      };
      state.push(data);
    },
    decrement: (state, action) => {
      state = state.filter((val) => action.payload === val.Id);
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement } = roles.actions;

export default roles.reducer;
