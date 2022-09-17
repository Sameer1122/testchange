import React, { useState, useEffect } from "react";
import { Header, Container, Sider } from "../../components";

import "./style.css";
import {
  CardTable,
  Content,
  ContentContainer,
  FirstRow,
  SearchArea,
} from "./styles";
import { Button, Col, Input, Modal, Row, Table } from "antd";
import Layout from "../../components/layout";

import Employee from "./EmployeeGrid/Employee";

import WorkGrid from "./WorkGrid/WorkGrid";
export default function Configuration({ selected, setSelected }) {
  // Store the current datasets
  // const [visibleColumns, setVisibleColumns] = useState([...columns]);

  const [active, setactive] = useState(1);

  useEffect(() => {
    setSelected("5");
  }, []);

  return (
    <Layout>
      <Sider selected={selected} setSelected={setSelected} />
      <Container>
        <Header pageName="Configuration" />
        <Content>
          <ContentContainer>
            <CardTable>
              <FirstRow>
                <Button
                  onClick={() => setactive(1)}
                  style={{
                    width: "33%",
                    borderRadius: "6px",
                    padding: "8px 4px",
                    height: "42px",
                    background: `${active === 1 ? "black" : "#B0B0B0"}`,
                    color: "white",
                  }}
                >
                  Work Types
                </Button>
                <Button
                  onClick={() => setactive(2)}
                  style={{
                    width: "33%",
                    borderRadius: "6px",
                    padding: "8px 4px",
                    height: "42px",
                    background: `${active === 2 ? "black" : "#B0B0B0"}`,
                    color: "white",
                  }}
                >
                  Warehouse Employees
                </Button>
                <Button
                  onClick={() => setactive(3)}
                  style={{
                    width: "33%",
                    borderRadius: "6px",
                    padding: "8px 4px",
                    height: "42px",
                    background: `${active === 3 ? "black" : "#B0B0B0"}`,
                    color: "white",
                  }}
                >
                  Pending
                </Button>
              </FirstRow>
              {/* Just dropped */}
              {active === 1 && <WorkGrid />}
              {active === 2 && <Employee />}
            </CardTable>
          </ContentContainer>
        </Content>
      </Container>
    </Layout>
  );
}
