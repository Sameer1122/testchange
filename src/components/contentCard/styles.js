import { Typography } from "antd";
import styled from "styled-components";

export const CardContainer = styled.div`
  width: 25vw;
  height: 33vh;
  border-radius: 20px;
  gap: 25px;
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
  color: #373737;
`;
