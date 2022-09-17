import React from "react";
import { Avatar, Typography } from "antd";
import {
  CardContainer,
  CardTitle,
  CardTitleText,
  DoughnutContainer,
  DoughnutNumber,
  LegendContainer,
  LegendKey,
} from "./styles";
import WorkbyWork from "../workCharts/workbywork";
import {
  Carier,
  InboundOutbound,
  mode,
  pieChartData,
  pieStatusData,
} from "../../data/dummy";
import Bar from "../workCharts/prioritychart";
import StatusChart from "../workCharts/statuschart";
import InboundChart from "../TransportChart/statuschart";
import Mode from "../TransportChart/mode";
import Courier from "../TransportChart/Courier";

export default function ContentCard({ data, active }) {
  const title = data?.title;
  const bgColor = data?.bgColor;

  return (
    <CardContainer style={{ backgroundColor: "white" }}>
      <CardTitle
        style={{ background: bgColor, borderRadius: "16px 16px 0px 0px" }}
      >
        <CardTitleText>{title}</CardTitleText>
      </CardTitle>
      {active === 1 && (
        <WorkbyWork
          data={pieChartData}
          legendVisiblity
          height="55%"
          bgColor={bgColor}
        />
      )}
      {active === 2 && <Bar bgColor={bgColor} />}
      {active === 3 && (
        <StatusChart
          data={pieStatusData}
          legendVisiblity
          height="55%"
          bgColor={bgColor}
        />
      )}
      {active === 4 && (
        <InboundChart
          data={InboundOutbound}
          bgColor={bgColor}
          legendVisiblity
          height="55%"
        />
      )}
      {active === 5 && <Mode bgColor={bgColor} />}
      {active === 6 && (
        <Courier data={Carier} bgColor={bgColor} legendVisiblity height="55%" />
      )}
      <CardTitle
        style={{
          background: bgColor,
          borderRadius: "0px 0px 16px 16px",
          marginTop: "-2rem",
        }}
      ></CardTitle>
    </CardContainer>
  );
}
