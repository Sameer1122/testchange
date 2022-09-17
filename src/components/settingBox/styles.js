import { Avatar, Typography } from "antd";
import styled from "styled-components";

export const SettingContainer = styled.div`
  height: 280px;
`;

export const SettingContent = styled.div`
  height: 100%;
  width: 100%;
  border-radius: 20px;
  background-color: #fff;
`;

export const SettingTitle = styled.div`
  width: 100%;
  height: 20%;
  align-items: center;
  display: flex;
  padding-left: 20px;
`;

export const SettingTitleText = styled(Typography)`
  font-size: 24px;
  font-weight: bold;
`;

export const SettingDetails = styled.div`
  width: 100%;
  height: 60%;
  padding: 20px;
`;

export const DetailContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  border-radius: 20px;
  background-color: #ecf3ff;
  overflow: hidden;
`;

export const DetailRow = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  padding-left: 20px;
`;

export const DetailRowTitle = styled.div`
  width: 200px;
  font-weight: bold;
`;

export const DetailRowConfig = styled.div`
  width: 200px;
`;

export const TimeInterval = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 75px;
  height: 28px;
  background-color: #d1d8dc;
  border-radius: 20px;
  font-size: 13px;
  padding-left: 10px;
  padding-right: 10px;
  position: relative;
`;

export const CustomToggler = styled(Avatar)`
  height: 24px;
  width: 24px;
  background-color: #34b658;
  position: absolute;
`;

export const CustomToggle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 75px;
  height: 28px;
  background-color: #d1d8dc;
  border-radius: 20px;
  font-size: 13px;
  padding-left: 10px;
  padding-right: 10px;
  position: relative;
`;
