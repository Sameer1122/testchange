import React from "react";
import { Dropdown, Menu, Space } from "antd";
import { Bar } from "react-chartjs-2";
import {
  CardTitle,
  CardTitleText,
  RemainingWorkCard,
  DropDownOverlay,
} from "./styles";
import {
  DownOutlined,
  GlobalOutlined,
  SettingOutlined,
} from "@ant-design/icons";

const menu = (
  <Menu
    items={[
      {
        label: "Current Shift",
        key: "0",
      },
    ]}
  />
);

const DropD = () => {
  return (
    <Dropdown overlay={menu} trigger={["click"]}>
      <DropDownOverlay>
        Current Shift
        <DownOutlined />
      </DropDownOverlay>
    </Dropdown>
  );
};

export default function WorkRemainingCard({ data, options }) {
  return (
    <RemainingWorkCard>
      <CardTitle>
        <CardTitleText>Work Remaining Against Goal</CardTitleText>
        <SettingOutlined style={{ cursor: "pointer", fontSize: "24px" }} />
      </CardTitle>
      {/* <DropD /> */}
      <Bar data={data} options={options} height={110} />
    </RemainingWorkCard>
  );
}
