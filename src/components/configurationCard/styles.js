import { Typography } from "antd";
import styled from "styled-components";

export const CardContainer = styled.div`
  width: 25vw;
  height: 33vh;
  border-radius: 20px;
  background-color: #fff;
`;

export const CardTitle = styled.div`
  width: 100%;
  height: 20%;
  justify-content: center;
  display: flex;
  padding: 15px 5px;
`;

export const CardTitleText = styled(Typography)`
  font-size: 24px;
  font-weight: bold;
  color: #373737;
`;

export const CardText1 = styled(Typography)`
  font-size: 14px;
  color: #373737;
  text-align: center;
  padding: 15px 5px;
`;
