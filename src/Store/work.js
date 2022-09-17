import { createSlice } from "@reduxjs/toolkit";
import uuid from "react-uuid";

export const work = createSlice({
  name: "work",
  initialState: {
    work: [
      {
        key: "1",
        taskId: "2101",
        taskType: "Pallet Pick",
        status: "Completed",
        priority: "Medium",
        expected: "00:03:05",
        assignUser: null,
      },
      {
        key: "2",
        taskId: "1902",
        taskType: "Unloading",
        status: "Open",
        priority: "High",
        expected: "09:04:05",
        assignUser: null,
      },
      {
        key: "3",
        taskId: "1909",
        taskType: "Putaway",
        status: "Open",
        priority: "Low",
        expected: "20:05:05",
        assignUser: null,
      },
      {
        key: "4",
        taskId: "3102",
        taskType: "Worker",
        status: "Open",
        priority: "Low",
        expected: "00:05:05",
        assignUser: "Erica",
      },
      {
        key: "5",
        taskId: "3102",
        taskType: "Worker",
        status: "Open",
        priority: "Medium",
        expected: "00:05:05",
        assignUser: null,
      },
      {
        key: "6",
        taskId: "3102",
        taskType: "Pallet Pick",
        status: "Open",
        priority: "Low",
        expected: "00:05:05",
        assignUser: "Adam",
      },
      {
        key: "7",
        taskId: "3102",
        taskType: "Pallet Pick",
        status: "Completed",
        priority: "High",
        expected: "00:05:05",
        assignUser: null,
      },
      {
        key: "9",
        taskId: "3102",
        taskType: "Case Pick",
        status: "Completed",
        priority: "Medium",
        expected: "00:05:05",
        assignUser: null,
      },
      {
        key: "10",
        taskId: "3102",
        taskType: "Recieving",
        status: "Completed",
        priority: "High",
        expected: "00:05:05",
        assignUser: "Sameer",
      },
    ],
    priority: null,
    status: null,
    type: null,
  },
  reducers: {
    setpriority: (state, action) => {
      state.priority = action.payload;
      state.status = null;
      state.type = null;
    },
    setstatus: (state, action) => {
      state.status = action.payload;
      state.priority = null;
      state.type = null;
    },
    settype: (state, action) => {
      state.type = action.payload;
      state.status = null;
      state.priority = null;
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
export const { setpriority, settype, setstatus, decrement, editing } =
  work.actions;

export default work.reducer;
