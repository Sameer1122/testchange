import { Typography, Button } from "antd";
import React from "react";
import styled from "styled-components";

export const Content = styled.div`
  background-color: #ecf3ff;
  gap: 20px;
  padding: 10px 45px;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 24px;
  gap: 24px;
<<<<<<< HEAD
=======
  min-height: 100vh;
>>>>>>> 5d3941614d7bcf58f7c0d7f0aeb025c8e68c59e5
`;

export const CardTitle = styled.div`
  display: flex;
  flex: 2;
  justify-content: space-between;
  align-items: center;
  padding: 12px 0px 24px 20px;
`;

export const CardTitleText = styled(Typography)`
  font-size: 24px;
  font-weight: bold;
`;

export const FirstRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
`;

export const DemandCard = styled.div`
  display: flex;
`;

export const DemandCardContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 35vh;
  width: 78.25vw;
  padding: 0px 20px 0px 20px;
  background-color: #fff;
  position: relative;
`;

export const AggregateButton = styled(Button)`
  position: absolute;
  bottom: 2px;
  right: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30px;
  width: 90px;
  border-radius: 10px;
  background-color: #343c4a;
  :hover {
    background-color: #546075;
  }
  :focus {
    background-color: #343c4a;
  }
`;
