import { Header } from "antd/lib/layout/layout";
import { Button } from "antd";
import styled from "styled-components";

export const StyledHeader = styled(Header)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
  padding: 40px 45px 0px 45px;
  background-color: #edf2fe;
`;

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  align-items: center;
  height: 35px;
`;

export const ScreenTitle = styled.div`
  height: 100%;
  width: 30%;
  display: flex;
  align-items: center;
`;

export const SearchArea = styled.div`
  height: 100%;
  width: 41%;
  display: flex;
  padding-left: 20px;
  padding-right: 20px;
  align-items: center;
`;

export const ButtonHolder = styled.div`
  height: 100%;
  width: 24%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ButtonBox = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 35px;
  width: 35px;
  border-radius: 10px;
`;

export const LogoutButton = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  height: 35px;
  width: 105px;
  border-radius: 10px;
  background-color: #343c4a;
  :hover {
    background-color: #546075;
  }
  :focus {
    background-color: #343c4a;
  }
`;
