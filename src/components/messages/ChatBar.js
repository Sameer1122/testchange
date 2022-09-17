import React from "react";
import { useSelector } from "react-redux";
import uuid from "react-uuid";
import UserItem from "./UserItem";

const ChatBar = ({ value }) => {
  const data = useSelector((state) => state.userchat.chatuser);
  const userData = data.filter((val) => val.activeBar === true);
  return (
    <div>
      {userData
        .filter((data) => {
          if (value === "") {
            return data;
          } else if (
            data.name.toLowerCase().includes(value.toLocaleLowerCase())
          ) {
            return data;
          }
        })
        .map((val) => (
          <UserItem
            key={uuid()}
            last={val.last}
            id={val.id}
            img={val.image}
            active={val.active}
            name={val.name}
            time={val.lastTime}
          />
        ))}
    </div>
  );
};

export default ChatBar;
