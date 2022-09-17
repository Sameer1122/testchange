import React from "react";
import { useSelector } from "react-redux";
import classes from "./header.module.css";
import { MoreOutlined } from "@ant-design/icons";
const ChatHeader = () => {
  const data = useSelector((state) => state.userchat.chatuser);
  const active = data.filter((val) => val.active === true);
  const activee = active[0];
  return (
    <div className={classes.outercontainer} style={{ position: "relative" }}>
      <div className={classes.container}>
        <div className={classes.imgContainer}>
          <img className={classes.avatar} src={activee.image} alt="now" />
          <div
            className={activee.isOnline ? classes.online : classes.offline}
          ></div>
        </div>
        <h6 style={{ color: "#333" }}>{activee.name}</h6>
        <span>|</span>
        <h6 style={{ color: "#A1A1A9" }}>
          {activee.isOnline ? "Online" : "Offline"}
        </h6>
      </div>
      <MoreOutlined className={classes.more} />
      <div className={classes.status}>Today</div>
    </div>
  );
};

export default ChatHeader;
