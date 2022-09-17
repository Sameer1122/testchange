import { Typography } from "antd";
import styled from "styled-components";

export const CardContainer = styled.div`
  width: 18vw;
  height: 40vh;
  border-radius: 20px;
  background-color: #fff;
`;

export const CardTitle = styled.div`
  width: 100%;
  height: 20%;
  align-items: center;
  justify-content: space-between;
  display: flex;
  padding-left: 20px;
  padding-right: 20px;
`;

export const CardTitleText = styled(Typography)`
  font-size: 24px;
  font-weight: bold;
`;

export const DoughnutContainer = styled.div`
  display: flex;
  width: 100%;
  height: 55%;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const DoughnutNumber = styled(Typography)`
  font-size: 24px;
`;

export const LegendContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 25%;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
`;

export const LegendKey = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 20;
  align-items: center;
  gap: 10px;
`;
