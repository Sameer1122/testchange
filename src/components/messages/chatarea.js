import React from "react";
import { useSelector } from "react-redux";
import classes from "./chatarea.module.css";
import uuid from "react-uuid";
import moment from "moment/moment";
const Chatarea = () => {
  const data = useSelector((state) => state.chatting.chatting);
  const id = useSelector((state) => state.chatting.active);
  console.log("acitve id is" + id);
  const currentchat = data.filter((val) => val.sender === id);
  const current = currentchat[0];

  const currentdate = moment().unix();

  return (
    <div style={{ padding: "14px 34px", width: "100%" }}>
      {currentchat.length > 0 ? (
        currentchat.map((val) => (
          <div
            style={{
              display: "flex",
              flexDirection: `${val.type === "other" ? "row-reverse" : "row"}`,
              alignItems: "center",
              gap: "1rem",
            }}
          >
            <div
              key={uuid()}
              className={val.type === "other" ? classes.my : classes.chat}
            >
              <div style={{ fontSize: "14px", fontWeight: "400" }}>
                {val.msg}{" "}
              </div>
            </div>
            <h6 style={{ fontSize: "12px", color: "#A1A1A9" }}>
              {val.sendTime}{" "}
            </h6>
          </div>
        ))
      ) : (
        <div className={classes.empty}>Start Chat by sending a message</div>
      )}
    </div>
  );
};

export default Chatarea;
