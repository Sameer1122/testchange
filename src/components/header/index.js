import {
  BellOutlined,
  DribbbleOutlined,
  LogoutOutlined,
  MessageOutlined,
  LockOutlined,
  ReloadOutlined,
  SearchOutlined,
  SettingOutlined,
  RightOutlined,
  SyncOutlined,
} from "@ant-design/icons";
import { Input, Tooltip, Typography, Popover, Modal, Button } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import {
  ButtonBox,
  ButtonHolder,
  HeaderContent,
  LogoutButton,
  ScreenTitle,
  SearchArea,
  StyledHeader,
} from "./styles";
import "./style.css";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { useState } from "react";
export default function Header({ pageName }) {
  const [active, setactive] = useState(1);
  const showPromiseConfirm = () => {
    Modal.confirm({
      title: "Are you sure you want to log out?",
      okText: "Logout",
      async onOk() {
        return new Promise((resolve, reject) => {
          setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
        }).catch(() => console.log("Oops errors!"));
      },

      onCancel() {},
    });
  };
  const text = (
    <div className="ant-popover-inner-contentt">
      <span
        style={{
          textAlign: "center",
          display: "block",
          marginBottom: "8px",
          marginLeft: "5rem",
        }}
      >
        Latest Sync
      </span>
      <div>
        <span>TM:3:14PM 9/14/22</span> <br />
        <span>WM:4:14PM 9/14/22</span>
      </div>
    </div>
  );
  const notifications = (
    <div className="innercontent">
      <div className="button-row">
        <Button
          onClick={() => {
            setactive(1);
          }}
          style={
            active === 1
              ? { background: "#333", color: "white" }
              : { background: "transparent", color: "black" }
          }
          className="notification-buttons"
        >
          Notification
        </Button>
        <Button
          onClick={() => {
            setactive(2);
          }}
          style={
            active === 2
              ? { background: "#333", color: "white" }
              : { background: "transparent", color: "black" }
          }
          className="notification-buttons"
        >
          Messages
        </Button>
      </div>
      {active === 1 && (
        <>
          <div className="notif-content">
            <div>
              <LockOutlined
                style={{
                  fontSize: "16px",
                  background: "white",
                  borderRadius: "1000px",
                  padding: "8px",
                }}
              />
            </div>
            <div style={{ width: "300px" }}>
              <h6 style={{ fontWeight: "bold", fontSize: "14px" }}>
                50 Task in the Last 5 mintues
              </h6>
              <div className="single-notif">
                <span style={{ color: "#A3A5AA" }}>
                  50 new task are added make sure to check it as soon ...
                </span>
                <RightOutlined style={{ marginTop: "4px" }} />
              </div>
              <span style={{ color: "#A3A5AA" }}>Aug 23, 2022 at 4:22PM</span>
            </div>
          </div>
          <div className="notif-content">
            <div>
              <LockOutlined className="lock-icon" />
            </div>
            <div style={{ width: "300px" }}>
              <h6 style={{ fontWeight: "bold", fontSize: "14px" }}>
                Uptick in the Putaway task in the next hour
              </h6>
              <div className="single-notif">
                <span style={{ color: "#A3A5AA" }}>
                  If you are going to make sure to check it as soon ...
                </span>
                <RightOutlined style={{ marginTop: "4px" }} />
              </div>
              <span style={{ color: "#A3A5AA" }}>Jun 23, 2022 at 5:22PM</span>
            </div>
          </div>{" "}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              borderTop: "1px solid #A3A5AA",
              padding: "4px 0",
              marginTop: "8px",
            }}
          >
            <span
              style={{
                fontWeight: "bold",
                fontSize: "12px",
                color: "#4F5152",
                cursor: "pointer",
              }}
            >
              See all notifications
            </span>
          </div>
        </>
      )}
      {active === 2 && (
        <>
          <div className="notif-content">
            <div>
              <img
                src={
                  "https://previews.123rf.com/images/dragonimages/dragonimages1611/dragonimages161100413/66967368-portrait-of-a-pretty-young-female-employee.jpg"
                }
                style={{
                  height: "36px",
                  objectFit: "cover",
                  width: "36px",
                  borderRadius: "1000px",
                }}
              />
            </div>
            <Link to={"/message"}>
              <div style={{ width: "300px" }}>
                <h6 style={{ fontWeight: "bold", fontSize: "14px" }}>
                  Katherine
                </h6>
                <div className="single-notif">
                  <span style={{ color: "#A3A5AA" }}>
                    We need more workers here, if it is possible make sure to
                    give more ...
                  </span>
                  <RightOutlined style={{ marginTop: "4px" }} />
                </div>
                <span style={{ color: "#A3A5AA" }}>Aug 23, 2022 at 4:22PM</span>
              </div>
            </Link>
          </div>
          <div className="notif-content">
            <div>
              <img
                src={
                  "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                }
                style={{
                  height: "36px",
                  objectFit: "cover",
                  width: "36px",
                  borderRadius: "1000px",
                }}
              />
            </div>
            <Link to={"/message"}>
              <div style={{ width: "300px" }}>
                <h6 style={{ fontWeight: "bold", fontSize: "14px" }}>
                  Erica Smith
                </h6>
                <div className="single-notif">
                  <span style={{ color: "#A3A5AA" }}>
                    Hey I'm looking for something that you can get me...
                  </span>
                  <RightOutlined style={{ marginTop: "4px" }} />
                </div>
                <span style={{ color: "#A3A5AA" }}>Jun 23, 2022 at 5:22PM</span>
              </div>
            </Link>
          </div>{" "}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              borderTop: "1px solid #A3A5AA",
              padding: "4px 0",
              marginTop: "8px",
            }}
          >
            <Link to={"/message"}>
              <span
                style={{
                  fontWeight: "bold",
                  fontSize: "12px",
                  color: "#4F5152",
                  cursor: "pointer",
                }}
              >
                See all Messages
              </span>
            </Link>
          </div>
        </>
      )}
    </div>
  );
  return (
    <StyledHeader>
      <HeaderContent>
        <ScreenTitle>
          <Typography style={{ fontSize: 34, fontWeight: "bold" }}>
            {pageName}
          </Typography>
        </ScreenTitle>
        <SearchArea>
          {/* <Input
            placeholder="Search something.."
            prefix={<SearchOutlined style={{ fontSize: 20 }} />}
            style={{
              borderRadius: 5,
              height: 40,
            }}
          /> */}
        </SearchArea>
        <ButtonHolder>
          <Popover content={text} placement="bottomLeft" trigger="click">
            <SyncOutlined style={{ fontSize: 20, cursor: "pointer" }} />
          </Popover>

          <ReloadOutlined style={{ fontSize: 20, cursor: "pointer" }} />
          <Popover content={notifications} placement="bottom" trigger="click">
            <BellOutlined style={{ fontSize: 20, cursor: "pointer" }} />
          </Popover>
          {/* <Link to="/settings">
            <SettingOutlined style={{ fontSize: 20, cursor: "pointer" }} />
          </Link> */}
          <LogoutButton onClick={showPromiseConfirm}>
            <LogoutOutlined style={{ color: "white" }} />
            <Typography style={{ color: "#fff" }}>Logout</Typography>
          </LogoutButton>
        </ButtonHolder>
      </HeaderContent>
    </StyledHeader>
  );
}
