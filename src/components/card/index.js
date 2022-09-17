import React from "react";
import { Avatar, Typography } from "antd";
import { Doughnut } from "react-chartjs-2";
import {
  CardContainer,
  CardTitle,
  CardTitleText,
  DoughnutContainer,
  DoughnutNumber,
  LegendContainer,
  LegendKey,
} from "./styles";
import { GlobalOutlined, SettingOutlined } from "@ant-design/icons";

export default function HomeCard({ data }) {
  const title = data?.datasets[0]?.label;
  const legend = data?.legend;
  const doughnutNumber = data?.datasets[0]?.data[1] || 12;

  return (
    <CardContainer>
      <CardTitle>
        <CardTitleText>{title}</CardTitleText>
        <SettingOutlined style={{ cursor: "pointer", fontSize: "16px" }} />
      </CardTitle>
      <DoughnutContainer>
        <DoughnutNumber>{doughnutNumber}</DoughnutNumber>
        <Doughnut
          data={data}
          options={{
            offset: 0,
            cutout: 75,
            radius: 70,
            rotation: 180,
          }}
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
          }}
        ></Doughnut>
      </DoughnutContainer>

      <LegendContainer>
        <LegendKey>
          <Avatar
            style={{ height: 10, width: 10, backgroundColor: legend[0].color }}
          />
          <Typography style={{ fontSize: 14 }}>{legend[0].text}</Typography>
        </LegendKey>
        <LegendKey>
          <Avatar
            style={{ height: 10, width: 10, backgroundColor: legend[1].color }}
          />
          <Typography style={{ fontSize: 14 }}>{legend[1].text}</Typography>
        </LegendKey>
      </LegendContainer>
    </CardContainer>
  );
}
