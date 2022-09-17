import {
  CloseOutlined,
  LinkOutlined,
  MessageOutlined,
  PlusOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { Button, Col, Input, Popover, Row, Select } from "antd";
import moment from "moment/moment";
import React, { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";

import { ChatEngine, getOrCreateChat, sendMessage } from "react-chat-engine";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import uuid from "react-uuid";
import { Container, Header, Layout, Sider } from "../../components";
import Chatarea from "../../components/messages/chatarea";
import ChatBar from "../../components/messages/ChatBar";

import ChatHeader from "../../components/messages/header";
import UserItem from "../../components/messages/UserItem";
import { send, setactive } from "../../Store/chatting";
import { addnew, setrecent, setactive as activee } from "../../Store/userchat";
import { SearchArea } from "../configuration/styles";
import { Content, ContentContainer } from "./styles";
import classes from "./styles.module.css";

const Messages = (props) => {
  const listRef = useRef();
  const active = useSelector((state) => state.chatting.active);

  const [value, setvalue] = useState("");
  const [username, setUsername] = useState("");
  const [msgvalue, setmsgvalue] = useState("");
  const [Visible, setVisible] = useState(false);
  const [Addchat, setAddchat] = useState();
  console.log(Addchat);
  useEffect(() => {
    listRef.current.scrollTo(0, listRef.current.scrollHeight, "auto");
  }, [active, msgvalue]);
  function createDirectChat(creds) {
    getOrCreateChat(
      creds,
      { is_direct_chat: true, usernames: [username] },
      () => setUsername("")
    );
  }
  const userData = useSelector((state) => state.userchat.chatuser);
  const specific = userData.filter((val) => val.activeBar === false);
  console.log(specific);
  function renderChatForm(creds) {
    return (
      <div>
        <input
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button onClick={() => createDirectChat(creds)}>Create</button>
      </div>
    );
  }
  const searchHandler = (event) => {
    setvalue(event.target.value);
  };
  const dispatch = useDispatch();
  const sendmsgHandler = (event) => {
    const date = new Date();
    const current = moment(date).format("hh:mm A");
    if (event.key === "Enter" && event.target.value.trim().length > 0) {
      console.log(event.target.value);
      const data = {
        sender: active,
        receving: 0,
        image:
          "https://pbs.twimg.com/profile_images/1116431270697766912/-NfnQHvh_400x400.jpg",
        type: "other",
        msg: event.target.value,
        sendTime: current,
      };
      console.log(event.target.value);
      const recent = {
        id: active,
        last: event.target.value,
        time: current,
      };
      dispatch(send(data));
      dispatch(setrecent(recent));

      setmsgvalue("");
      listRef.current.scrollTo(0, listRef.current.scrollHeight, "auto");
    }
  };
  const addchatHandler = () => {
    if (Addchat) {
      dispatch(addnew(Addchat));
      dispatch(setactive(Addchat));
      dispatch(activee(Addchat));
    }
    setVisible(false);
  };
  const { Option } = Select;
  const notifications = (
    <div className="innercontent">
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <CloseOutlined
          onClick={() => setVisible(false)}
          style={{ cursor: "pointer", marginBottom: "4pxx" }}
        />
      </div>
      <div
        style={{
          width: "250px",
          padding: "8px 8px",
          display: "flex",
          gap: "1rem",
        }}
      >
        <Select
          style={{ width: "100%" }}
          showSearch
          placeholder="Select a person"
          optionFilterProp="children"
          onChange={(value) => setAddchat(value)}
          // onSearch={onSearch}
          filterOption={(input, option) =>
            option.children.toLowerCase().includes(input.toLowerCase())
          }
        >
          {specific.map((val) => (
            <Option value={val.id}>{val.name}</Option>
          ))}
        </Select>
        <Button
          onClick={addchatHandler}
          style={{ color: "white", background: "#333", borderRadius: "8px" }}
        >
          Start
        </Button>
      </div>
    </div>
  );
  return (
    <Layout>
      <Sider selected={props.selected} setSelected={props.setSelected} />
      <Container>
        <Header pageName="Messages" />
        <Content>
          <ContentContainer>
            <Row style={{ paddingBottom: "6rem" }}>
              <Col
                span={7}
                style={{ background: "white", borderRadius: "8px" }}
              >
                <Row className={classes.chatheader}>
                  <div
                    style={{
                      display: "flex",
                      gap: "1rem",
                      alignItems: "center",
                    }}
                  >
                    <MessageOutlined />
                    <h4 className={classes.headertitle}>Contacts</h4>
                  </div>
                  <Popover
                    content={notifications}
                    placement="bottom"
                    visible={Visible}
                    trigger="click"
                  >
                    <Button
                      onClick={() => setVisible(true)}
                      style={{
                        color: "white",
                        background: "#333",
                        borderRadius: "8px",
                      }}
                    >
                      <PlusOutlined />
                      New
                    </Button>
                  </Popover>
                </Row>
                {/* Search */}
                <Row style={{ marginBottom: "1rem" }}>
                  <SearchArea>
                    <Input
                      onChange={searchHandler}
                      placeholder="Search"
                      prefix={<SearchOutlined style={{ fontSize: 20 }} />}
                      style={{
                        borderRadius: 8,
                        height: 30,
                        backgroundColor: "#f6f6f6",
                      }}
                    />
                  </SearchArea>
                </Row>
                <Row
                  style={{
                    overflowY: "scroll",
                    height: "70vh",
                    display: "block",
                  }}
                >
                  <ChatBar value={value} />
                </Row>
              </Col>
              <Col span={1}></Col>
              <Col span={16}>
                <Row style={{ background: "white" }}>
                  <ChatHeader />
                </Row>
                <Row
                  id="list"
                  ref={listRef}
                  style={{
                    background: "white",
                    height: "75vh",
                    overflowY: "scroll",
                  }}
                >
                  <Chatarea />
                </Row>
                <Row style={{ background: "white", paddingBottom: "1rem" }}>
                  <SearchArea style={{ gap: "1rem" }}>
                    <img
                      style={{
                        width: "32px",
                        height: "32px",
                        objectFit: "cover",
                        borderRadius: "1000px",
                      }}
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTA78Na63ws7B7EAWYgTr9BxhX_Z8oLa1nvOA&usqp=CAU"
                      alt=""
                    />
                    <Input
                      onKeyDown={sendmsgHandler}
                      onChange={(event) => setmsgvalue(event.target.value)}
                      value={msgvalue}
                      placeholder="Write Messages down here..."
                      style={{
                        borderRadius: 8,
                        height: 45,
                        backgroundColor: "#f6f6f6",
                      }}
                    />
                  </SearchArea>
                </Row>
              </Col>
            </Row>
          </ContentContainer>
        </Content>
      </Container>
    </Layout>
  );
};

export default Messages;
