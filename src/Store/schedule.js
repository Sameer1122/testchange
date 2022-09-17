import { createSlice } from "@reduxjs/toolkit";

export const schedule = createSlice({
  name: "schedule",
  initialState: [
    {
      count: 1,
      Id: 1,
      Subject: "Explosion of Betelgeuse Star",
      Location: "Space Center USA",
      StartTime: "2021-01-10T04:00:00.000Z",
      EndTime: "2021-01-10T05:30:00.000Z",
      CategoryColor: "#1aaa55",
    },
  ],
  reducers: {
    increment: (state, action) => {
      const data = state.filter((val) => action.payload.Id === val.Id);
    },
    // decrement: (state) => {
    //   state.value -= 1;
    // },
  },
});

// Action creators are generated for each case reducer function
export const { increment } = schedule.actions;

export default schedule.reducer;
