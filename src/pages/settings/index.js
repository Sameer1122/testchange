import React from "react";
import { Layout, Container, Sider, Header, SettingBox } from "../../components";
import { Content, ContentContainer } from "./styles";

export default function Settings({ selected, setSelected }) {
  return (
    <Layout>
      <Sider selected={selected} setSelected={setSelected} />
      <Container>
        <Header pageName="Settings" />
        <Content>
          <ContentContainer>
            <SettingBox settingTitle="Warehouse Connector Setting" />
            <SettingBox settingTitle="Transportation Connector Setting" />
          </ContentContainer>
        </Content>
      </Container>
    </Layout>
  );
}
