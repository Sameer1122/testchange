import { createSlice } from "@reduxjs/toolkit";
import uuid from "react-uuid";

export const userchat = createSlice({
  name: "userchat",
  initialState: {
    chatuser: [
      {
        activebarId: 1,
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTA78Na63ws7B7EAWYgTr9BxhX_Z8oLa1nvOA&usqp=CAU",
        id: 1,
        name: "Tim Hover",
        last: "",
        lastTime: "",
        active: true,
        activeBar: true,
        isOnline: true,
      },
      {
        activebarId: 2,
        image:
          "https://previews.123rf.com/images/dragonimages/dragonimages1611/dragonimages161100413/66967368-portrait-of-a-pretty-young-female-employee.jpg",
        id: 2,
        name: "Erica Rossi",
        active: false,
        last: "",
        lastTime: "",
        activeBar: false,
        isOnline: false,
      },
      {
        activebarId: 1,
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTQEZrATmgHOi5ls0YCCQBTkocia_atSw0X-Q&usqp=CAU",
        id: 3,
        name: "Hamaad Dejesus",
        active: false,
        isOnline: false,
        last: "",
        lastTime: "",
        activeBar: false,
      },
      {
        last: "",
        lastTime: "",
        activeBar: false,
        activebarId: 0,
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRZ6tM7Nj72bWjr_8IQ37Apr2lJup_pxX_uZA&usqp=CAU",
        id: 4,
        name: "Eleni Hobbs",
        active: false,
        isOnline: true,
      },
      {
        last: "",
        lastTime: "",
        activeBar: false,
        activebarId: 0,
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRJo1MiPQp3IIdp54vvRDXlhbqlhXW9v1v6kw&usqp=CAU",
        id: 5,
        name: "Elsa Black",
        active: false,
        isOnline: false,
      },
      {
        last: "",
        lastTime: "",
        activeBar: false,
        activebarId: 0,
        image:
          "https://huber.ghostpool.com/wp-content/uploads/avatars/3/596dfc2058143-bpfull.png",
        id: 6,
        name: "Kayley Mellor",
        active: false,
        isOnline: true,
      },
      {
        last: "",
        lastTime: "",
        activeBar: false,
        activebarId: 0,
        image:
          "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        id: 7,
        name: "Hasan Mcculloch",
        active: false,
        isOnline: true,
      },
      {
        last: "",
        lastTime: "",
        activeBar: false,
        activebarId: 0,
        image:
          "https://previews.123rf.com/images/dragonimages/dragonimages1611/dragonimages161100413/66967368-portrait-of-a-pretty-young-female-employee.jpg",
        id: 8,
        name: "Autumn Mckee",
        active: false,
        isOnline: false,
      },
      {
        last: "",
        lastTime: "",
        activeBar: false,
        activebarId: 0,
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSM6p4C6imkewkCDW-9QrpV-MMAhOC7GnJcIQ&usqp=CAU",
        id: 9,
        name: "Allen Woodley",
        active: false,
        isOnline: true,
      },
      {
        last: "",
        lastTime: "",
        activeBar: false,
        activebarId: 0,
        image: "https://pbs.twimg.com/profile_images/770394499/female.png",
        id: 10,
        name: "Manpreet David",
        active: false,
        isOnline: true,
      },
    ],
  },
  reducers: {
    setactive: (state, action) => {
      state.chatuser = state.chatuser.map((obj) => {
        if (obj.id === action.payload) {
          return {
            ...obj,
            active: true,
          };
        }

        // 👇️ otherwise return object as is
        return {
          ...obj,
          active: false,
        };
      });
    },
    setrecent: (state, action) => {
      state.chatuser = state.chatuser.map((obj) => {
        if (obj.id === action.payload.id) {
          return {
            ...obj,
            last: action.payload.last,
            lastTime: action.payload.time,
          };
        }

        // 👇️ otherwise return object as is
        return {
          ...obj,
        };
      });
    },
    addnew: (state, action) => {
      state.chatuser = state.chatuser.map((obj) => {
        if (obj.id === action.payload) {
          return {
            ...obj,
            activeBar: true,
            activebarId:
              state.chatuser.filter((val) => val.activeBar === true).length + 1,
          };
        }

        // 👇️ otherwise return object as is
        return {
          ...obj,
        };
      });
      state.chatuser.sort((a, b) => {
        if (a.activebarId > b.activebarId) return 1;
        if (a.activebarId < b.activebarId) return -1;
        return 0;
      });
    },
  },
});

// Action creators are generated for each case reducer function
export const { setactive, setrecent, addnew } = userchat.actions;

export default userchat.reducer;
