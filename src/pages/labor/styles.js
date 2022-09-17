import { Typography } from "antd";
import React from "react";
import styled from "styled-components";

export const Content = styled.div`
  min-height: 85vh;
  width: 100%;
  background-color: #ecf3ff;
  gap: 20px;
  padding: 45px;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  font-size: 24px;
  gap: 24px;
  background-color: white;
  padding: 25px;
  border-radius: 10px;
`;

export const CardTitle = styled.div`
  width: 100%;
  height: 20%;
  align-items: center;
  display: flex;
  padding-left: 20px;
`;

export const CardTitleText = styled(Typography)`
  font-size: 24px;
  font-weight: bold;
`;
