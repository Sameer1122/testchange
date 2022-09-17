import { Typography, Button, Space } from "antd";
import React from "react";
import styled from "styled-components";

export const CardTitle = styled.div`
  display: flex;
  justify-content: space-between;
  flex: 2;
  align-items: center;
  padding: 0px 24px 0px 20px;
`;

export const CardTitleText = styled(Typography)`
  font-size: 24px;
  font-weight: bold;
`;

export const DropDownOverlay = styled(Space)`
  display: flex;
  flex: 1;
  padding: 0px 0px 0px 20px;
  font-size: 16px;
  color: #bcbcbc;
`;

export const RemainingWorkCard = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 16px;
  height: 40vh;
  width: 40vw;
  background-color: #fff;
  border-radius: 16px;
`;
