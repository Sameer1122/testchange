import React, { useState } from "react";
import { Layout, Typography } from "antd";
import {
  LayoutFilled,
  SettingFilled,
  PieChartFilled,
  SignalFilled,
  CarFilled,
  UserOutlined,
} from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import {
  LogoContainer,
  MenuContainer,
  SiteLogo,
  StyledMenu,
  UserContainer,
  UserName,
  UserPicture,
} from "./styles";
import ImageUpload from "../imageUpload";
import { useSelector } from "react-redux";

const { Sider: SiderLayout } = Layout;

const SiderMenu = ({ selected, setSelected }) => {
  const navigate = useNavigate();

  const itemList = [
    {
      label: "Home",
      key: "1",
      icon: <LayoutFilled />,
      onClick: () => {
        navigate("/");
        setSelected("1");
      },
      style: {
        color: selected == "1" ? "#fff" : "#c5c7cf",
      },
    },
    {
      label: "Work",
      key: "2",
      icon: <SignalFilled />,
      onClick: () => {
        navigate("/work");
        setSelected("2");
      },
      style: {
        color: selected == "2" ? "#fff" : "#c5c7cf",
      },
    },
    {
      label: "Transportation",
      key: "3",
      icon: <CarFilled />,
      onClick: () => {
        navigate("/transportation");
        setSelected("3");
      },
      style: {
        color: selected == "3" ? "#fff" : "#c5c7cf",
      },
    },
    {
      label: "Labor",
      key: "4",
      icon: <PieChartFilled />,
      onClick: () => {
        navigate("/labor");
        setSelected("4");
      },
      style: {
        color: selected == "4" ? "#fff" : "#c5c7cf",
      },
    },
    {
      label: "Configuration",
      key: "5",
      icon: <SettingFilled />,
      onClick: () => {
        navigate("/configuration");
        setSelected("5");
      },
      style: {
        color: selected == "5" ? "#fff" : "#c5c7cf",
      },
    },
  ];

  return (
    <div className="sider-issue">
      <StyledMenu
        selectable={false}
        items={itemList}
        style={{
          backgroundColor: "#5f6579",
          fontWeight: "bold",
          overflow: "hidden ",
          color: "#fff",
        }}
      />
    </div>
  );
};

export default function Sider({ selected, setSelected }) {
  const [upload, setUpload] = useState(false);
  const image = useSelector((state) => state.personal.image);
  return (
    <SiderLayout width={"16vw"} style={{ backgroundColor: "#5f6579" }}>
      <LogoContainer>
        <SiteLogo icon={<UserOutlined />} />
        <Typography style={{ color: "#c5c7cf" }}>Iris Supply Chain</Typography>
      </LogoContainer>

      <ImageUpload open={upload} setOpen={setUpload} />

      <UserContainer>
        <Link to={"/personal"}>
          <UserPicture
            icon={
              image.trim().length > 0 ? <img src={image} /> : <UserOutlined />
            }
          />
        </Link>
        <Link to={"/personal"}>
          <UserName>Erica Smith</UserName>
        </Link>
      </UserContainer>

      <MenuContainer>
        <SiderMenu selected={selected} setSelected={setSelected} />
      </MenuContainer>
    </SiderLayout>
  );
}
