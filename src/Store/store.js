import { configureStore } from "@reduxjs/toolkit";
import roles from "./roles";
import schedule from "./schedule";
import template from "./template";
import worktypes from "./worktypes";
import employee from "./employee";
import personal from "./personal";
import work from "./work";
import transportation from "./transportation";
import userchat from "./userchat";
import chatting from "./chatting";
export default configureStore({
  reducer: {
    roles,
    schedule,
    chatting,
    template,
    worktypes,
    employee,
    personal,
    work,
    transportation,
    userchat,
  },
});
