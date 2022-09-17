import { createSlice } from "@reduxjs/toolkit";
import uuid from "react-uuid";

export const chatting = createSlice({
  name: "chatting",
  initialState: {
    chatting: [
      {
        sender: 1,
        receving: 0,
        image:
          "https://pbs.twimg.com/profile_images/1116431270697766912/-NfnQHvh_400x400.jpg",
        type: "",
        msg: "Hi Tim, How are you?",
        sendTime: "09:00 AM",
      },
      {
        sender: 1,
        receving: 0,
        image:
          "https://pbs.twimg.com/profile_images/1116431270697766912/-NfnQHvh_400x400.jpg",
        type: "",
        msg: "Everything Going Well?",
        sendTime: "09:05 AM",
      },
      {
        sender: 1,
        receving: 0,
        image:
          "https://pbs.twimg.com/profile_images/1116431270697766912/-NfnQHvh_400x400.jpg",
        type: "",
        msg: "Everything Going Well?",
        sendTime: "09:15 AM",
      },
      {
        sender: 1,
        receving: 0,
        image:
          "https://pbs.twimg.com/profile_images/1116431270697766912/-NfnQHvh_400x400.jpg",
        type: "",
        msg: "Everything Going Well?",
        sendTime: "09:22 AM",
      },
      {
        sender: 1,
        receving: 0,
        image:
          "https://pbs.twimg.com/profile_images/1116431270697766912/-NfnQHvh_400x400.jpg",
        type: "",
        msg: "Everything Going Well?",
        sendTime: "09:25 AM",
      },
      {
        sender: 1,
        receving: 0,
        image:
          "https://pbs.twimg.com/profile_images/1116431270697766912/-NfnQHvh_400x400.jpg",
        type: "",
        msg: "Everything Going Well?",
        sendTime: "09:31 AM",
      },
      {
        sender: 1,
        receving: 0,
        image:
          "https://pbs.twimg.com/profile_images/1116431270697766912/-NfnQHvh_400x400.jpg",
        type: "",
        msg: "Everything Going Well?",
        sendTime: "09:35 AM",
      },
      {
        sender: 1,
        receving: 0,
        image:
          "https://pbs.twimg.com/profile_images/1116431270697766912/-NfnQHvh_400x400.jpg",
        type: "",
        msg: "Everything Going Well?",
        sendTime: "09:39 AM",
      },
      {
        sender: 1,
        receving: 0,
        image:
          "https://pbs.twimg.com/profile_images/1116431270697766912/-NfnQHvh_400x400.jpg",
        type: "",
        msg: "Everything Going Well?",
        sendTime: "09:41 AM",
      },
      {
        sender: 1,
        receving: 0,
        image:
          "https://pbs.twimg.com/profile_images/1116431270697766912/-NfnQHvh_400x400.jpg",
        type: "",
        msg: "Hey man, please replay?",
        sendTime: "09:45 AM",
      },
      {
        sender: 1,
        receving: 0,
        image:
          "https://pbs.twimg.com/profile_images/1116431270697766912/-NfnQHvh_400x400.jpg",
        type: "",
        msg: "Heyyyy man, please replay?",
        sendTime: "09:55 AM",
      },
      {
        sender: 1,
        receving: 0,
        image:
          "https://pbs.twimg.com/profile_images/1116431270697766912/-NfnQHvh_400x400.jpg",
        type: "",
        msg: "Everything Going Well?",
        sendTime: "09:56 AM",
      },
      {
        sender: 1,
        receving: 0,
        image:
          "https://pbs.twimg.com/profile_images/1116431270697766912/-NfnQHvh_400x400.jpg",
        type: "",
        msg: "You're fired then",
        sendTime: "09:57 AM",
        // isLast: false,
      },
      {
        sender: 1,
        receving: 0,
        image:
          "https://pbs.twimg.com/profile_images/1116431270697766912/-NfnQHvh_400x400.jpg",
        type: "other",
        msg: "Hey, i'm here",
        sendTime: "09:57 AM",
        // isLast: true,
      },

      //   {
      //     sender: 2,
      //     receving: 0,
      //     image:
      //       "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTA78Na63ws7B7EAWYgTr9BxhX_Z8oLa1nvOA&usqp=CAU",
      //     type: "",
      //     msg: "I am fine.",
      //   },
      {
        sender: 3,
        receving: 0,
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTA78Na63ws7B7EAWYgTr9BxhX_Z8oLa1nvOA&usqp=CAU",
        type: "",
        msg: "What about you?",
      },
      {
        sender: 4,
        receving: 0,
        image:
          "https://pbs.twimg.com/profile_images/1116431270697766912/-NfnQHvh_400x400.jpg",
        type: "",
        msg: "Awesome these days.",
      },
      {
        sender: 5,
        receving: 0,
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTA78Na63ws7B7EAWYgTr9BxhX_Z8oLa1nvOA&usqp=CAU",
        type: "",
        msg: "Finally. What's the plan?",
      },
      {
        sender: 6,
        receving: 0,
        image:
          "https://pbs.twimg.com/profile_images/1116431270697766912/-NfnQHvh_400x400.jpg",
        type: "",
        msg: "what plan mate?",
      },
      {
        sender: 7,
        receving: 0,
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTA78Na63ws7B7EAWYgTr9BxhX_Z8oLa1nvOA&usqp=CAU",
        type: "",
        msg: "I'm taliking about the tutorial",
      },
    ],
    active: 1,
  },
  reducers: {
    setactive: (state, action) => {
      state.active = action.payload;
    },
    send: (state, action) => {
      //   state.chatting = state.chatting.map((obj) => {
      //     if (obj.sender === action.payload) {
      //       return {
      //         ...obj,
      //         isLast: true,
      //       };
      //     }

      //     // 👇️ otherwise return object as is
      //     return {
      //       ...obj,
      //       isLast: false,
      //     };
      //   });
      state.chatting.push(action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { setactive, send } = chatting.actions;

export default chatting.reducer;
