import React, { useEffect, useState } from "react";
import { Button, Typography } from "antd";

import {
  CardTitle,
  CardTitleText,
  Content,
  ContentContainer,
  AggregateButton,
  FirstRow,
  DemandCard,
  DemandCardContent,
} from "./styles";
import {
  Header,
  Container,
  HomeCard,
  Sider,
  DemandGraph,
} from "../../components";

import {
  demandsMock,
  shiftCapMock,
  outboundsMock,
  workRemainingMock,
  aggregateDataset,
} from "./mockData";
import Layout from "../../components/layout";
import WorkRemainingCard from "../../components/workRemainingCard";
import { GlobalOutlined, SettingOutlined } from "@ant-design/icons";

export default function Home(props) {
  const [data, setData] = useState(demandsMock.data);
  const [isAggregate, setAggregate] = useState(false);
  // Store the current datasets
  const [dataset, setDataset] = useState(aggregateDataset);

  const onAggregateClick = () => {
    if (isAggregate) {
      setAggregate(false);
      setDataset(data);
      setData(dataset);
    } else {
      setAggregate(true);
      setDataset(data);
      setData(dataset);
    }
  };

  useEffect(() => {
    props.setSelected("1");
  }, []);

  return (
    <Layout>
      <Sider selected={props.selected} setSelected={props.setSelected} />
      <Container>
        <Header pageName="Home" />
        <Content>
          <ContentContainer>
            {/* <div
              style={{
                display: "flex",
                width: "98%",
                justifyContent: "flex-end",
              }}
            >
              <Button style={{ width: "10%", borderRadius: "10px" }}>
                Customize
              </Button>
            </div> */}
            <FirstRow>
              <HomeCard data={outboundsMock} />

              <HomeCard data={shiftCapMock} />
              <WorkRemainingCard
                data={workRemainingMock.data}
                options={workRemainingMock.options}
              />
            </FirstRow>

            <DemandCard>
              <DemandCardContent>
                <CardTitle>
                  <CardTitleText>Demand</CardTitleText>
                  <SettingOutlined style={{ cursor: "pointer" }} />
                </CardTitle>
                <DemandGraph
                  demandMockData={demandsMock}
                  isAggregate={isAggregate}
                  data={data}
                  setData={setData}
                />

                <AggregateButton
                  onClick={() => {
                    onAggregateClick();
                  }}
                >
                  <Typography style={{ color: "#fff" }}>
                    {isAggregate ? "Segregate" : "Aggregate"}
                  </Typography>
                </AggregateButton>
              </DemandCardContent>
            </DemandCard>
          </ContentContainer>
        </Content>
      </Container>
    </Layout>
  );
}
