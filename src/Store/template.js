import { createSlice } from "@reduxjs/toolkit";

export const template = createSlice({
  name: "template",
  initialState: [
    {
      Name: "Friday",
      Id: 1,
      Color: "#1aaa55",
      templateTimes: [
        {
          count: 1,
          Id: 3,
          templateId: 1,
          templateColor: "#1aaa55",
          templateName: "Friday",
          Subject: "Explosion of Betelgeuse Star",
          Location: "Space Center USA",
          GroupId: 1,
          StartTime: "2021-01-10T04:00:00.000Z",
          EndTime: "2021-01-10T05:30:00.000Z",
          CategoryColor: "#1aaa55",
          specificEmp: [
            {
              Id: 1,
              Name: "Erica Smith",
            },
          ],
        },
        {
          count: 1,
          Id: 4,
          templateId: 1,
          templateColor: "#1aaa55",
          templateName: "Friday",
          Subject: "Thule Air Crash Report",
          Location: "Newyork City",
          GroupId: 2,
          StartTime: "2021-01-10T06:30:00.000Z",
          EndTime: "2021-01-10T08:30:00.000Z",
          CategoryColor: "#357cd2",
          specificEmp: [
            {
              Id: 1,
              Name: "Erica Smith",
            },
          ],
        },
      ],
    },
  ],
  reducers: {
    increment: (state, action) => {
      state.push(action.payload.data);
    },
    // decrement: (state) => {
    //   state.value -= 1;
    // },
  },
});

// Action creators are generated for each case reducer function
export const { increment } = template.actions;

export default template.reducer;
