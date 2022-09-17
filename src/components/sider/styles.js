import { Avatar, Menu } from "antd";
import Sider from "antd/lib/layout/Sider";
import React from "react";
import styled from "styled-components";

export const StyledMenu = styled(Menu)`
  .ant-menu:hover .ant-menu-selector {
    border-color: #a2a2a2 !important;
    box-shadow: none !important;
  }
`;

export const LogoContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  padding: 40px 40px 0px 40px;
`;

export const SiteLogo = styled(Avatar)`
  height: 50px;
  width: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const UserPicture = styled(Avatar)`
  height: 75px;
  width: 75px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const UserPictureP = styled(Avatar)`
  height: 192px;
  width: 192px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const UserName = styled.div`
  font-weight: bold;
  font-size: 24px;
  color: #c5c7cf;
  align-self: flex-start;
  padding: 15px;
`;

export const UserContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 30px 30px 0px 30px;
`;

export const MenuContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 30px 0px 0px 30px;
`;
