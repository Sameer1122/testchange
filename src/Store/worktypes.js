import { createSlice } from "@reduxjs/toolkit";
import uuid from "react-uuid";

export const worktypes = createSlice({
  name: "worktypes",
  initialState: {
    workType: [
      {
        key: "1",
        workType: "Pallet Pick",
        operationCode: "PPCK",
        duration: "20:05",
        goalPerHour: 60,
      },
      {
        key: "2",
        workType: "Case Pick",
        operationCode: "CPCK",
        duration: "20:05",
        goalPerHour: 20,
      },
      {
        key: "3",
        workType: "Recieving",
        operationCode: "RCV",
        duration: "21:15",
        goalPerHour: 30,
      },
      {
        key: "4",
        workType: "Put Away",
        operationCode: "PTWAY",
        duration: "00:55",
        goalPerHour: 50,
      },
      {
        key: "5",
        workType: "Unloading",
        operationCode: "Unnload",
        duration: "12:05",
        goalPerHour: 35,
      },
    ],
  },
  reducers: {
    increment: (state, action) => {
      state.workType.push(action.payload);
    },
    editing: (state, action) => {
      console.log(action.payload);
      state.workType = state.workType.map((obj) => {
        if (obj.key === action.payload.key) {
          return {
            ...obj,
            workType: action.payload.workType,
            operationCode: action.payload.operationCode,
            duration: action.payload.duration,
            goalPerHour: action.payload.goalPerHour,
          };
        }

        // 👇️ otherwise return object as is
        return obj;
      });
    },
    decrement: (state, action) => {
      state.workType = state.workType.filter(
        (val) => val.key !== action.payload
      );
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, editing } = worktypes.actions;

export default worktypes.reducer;
