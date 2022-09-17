import React from "react";
import { useDispatch } from "react-redux";
import { setactive } from "../../Store/userchat";
import { setactive as settactive } from "../../Store/chatting";
import classes from "./useritem.module.css";
import { useSelector } from "react-redux";

const UserItem = ({ img, name, active, id, last, time }) => {
  const data = useSelector((state) => state.chatting.chatting);
  const lastmsg = data.filter(
    (val) => val.isLast === true && val.sender === id
  );
  console.log(last);
  const dispatch = useDispatch();
  const setChatHandler = () => {
    dispatch(setactive(id));
    dispatch(settactive(id));
  };
  return (
    <div
      className={active ? classes.activecontainer : classes.container}
      onClick={setChatHandler}
    >
      <div className={classes.left}>
        <div className={classes.avatar}>
          <img className={classes.avtimg} src={img} alt="" />
        </div>
        <div className={classes.name}>
          <h6 style={{ color: `${active ? "white" : "#333"}` }}>{name}</h6>
          <p style={{ fontSize: "12px" }}>{last}</p>
        </div>
      </div>
      <div>
        <p style={{ fontSize: "12px" }}>{time}</p>
      </div>
    </div>
  );
};

export default UserItem;
