import { createSlice } from "@reduxjs/toolkit";
import uuid from "react-uuid";

export const transportation = createSlice({
  name: "transportation",
  initialState: {
    transportation: [
      {
        key: "1",
        loadedId: "223013",
        tractorNumber: "SE2501",
        trailerNumber: "0012094",
        carrier: "FEDEX",
        type: "Truck",
        mode: "TL",
        status: "Outbound",
        origin: "San Diego",
        destination: "Seatlle",
        currentLocation: "Silicon Valley",
        estimateTime: "00:12:00",
      },
      {
        key: "2",
        loadedId: "157031",
        tractorNumber: "LA901",
        trailerNumber: "9012391",
        carrier: "DHL",
        type: "Truck",
        status: "Outbound",
        mode: "LTL",
        origin: "Atlanta",
        destination: "Saint Louis",
        currentLocation: "Kansas",
        estimateTime: "00:12:00",
      },
      {
        key: "3",
        loadedId: "123013",
        tractorNumber: "FE3101",
        trailerNumber: "30944312",
        carrier: "UPS",
        status: "Inbound",
        type: "Truck",
        mode: "Parcel",
        origin: "New york",
        destination: "Boston",
        currentLocation: "Buffalo",
        estimateTime: "00:12:00",
      },
    ],
    mode: null,
    bound: null,
    carrier: null,
  },
  reducers: {
    setmode: (state, action) => {
      state.mode = action.payload;
      state.bound = null;
      state.carrier = null;
    },
    setbound: (state, action) => {
      state.bound = action.payload;
      state.mode = null;
      state.carrier = null;
    },
    setcarrier: (state, action) => {
      state.carrier = action.payload;
      state.bound = null;
      state.mode = null;
    },
    decrement: (state, action) => {
      state.transportationType = state.transportationType.filter(
        (val) => val.key !== action.payload
      );
    },
  },
});

// Action creators are generated for each case reducer function
export const { setbound, setcarrier, setmode } = transportation.actions;

export default transportation.reducer;
