import React, { useEffect, useState } from "react";
import { Header, Container, Sider } from "../../components";
import { Content, ContentContainer, FirstRow } from "./styles";
import { columns, dataSource } from "./mockData";
import { Row, Table, Col, Input, Button } from "antd";
import Layout from "../../components/layout";
import ContentCard from "../../components/contentCard";
import { SettingOutlined, SearchOutlined } from "@ant-design/icons";
import SettingModal from "../../components/settingModal";
import { SearchArea } from "../configuration/styles";

import { CSVLink } from "react-csv";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setstatus } from "../../Store/work";
export default function Work({ selected, setSelected }) {
  const [value, setvalue] = useState("");
  // Store the current datasets
  const data = useSelector((state) => state.work.work);
  const priority = useSelector((state) => state.work.priority);
  const status = useSelector((state) => state.work.status);
  const type = useSelector((state) => state.work.type);
  console.log(priority);
  const headers = [
    { label: "Task ID", key: "taskId" },
    { label: "Task Type", key: "taskType" },
    { label: "Priority", key: "priority" },
    { label: "Expected Time", key: "expected" },
    { label: "Status", key: "status" },
    { label: "User", key: "user" },
  ];

  const empColumns = [
    {
      title: "Work ID",
      sortKey: 1,
      dataIndex: "taskId",
      key: "taskId",
      width: "200px",
      sorter: (a, b) => a.taskId.localeCompare(b.taskId),
    },
    {
      title: "Task Type",
      sortKey: 2,
      dataIndex: "taskType",
      key: "taskType",
      width: "200px",
      sorter: (a, b) => a.taskType.localeCompare(b.taskType),
    },
    {
      title: "Priority",
      dataIndex: "priority",
      sortKey: 3,
      key: "priority",
      width: "200px",
      sorter: (a, b) => a.priority.localeCompare(b.priority),
    },
    {
      title: "Expected Time",
      sortKey: 4,
      dataIndex: "expected",
      key: "expected",
      width: "200px",
      sorter: (a, b) => a.expected.localeCompare(b.expected),
    },
    {
      title: "Status",
      sortKey: 5,
      dataIndex: "status",
      key: "status",
      sorter: (a, b) => a.status.localeCompare(b.status),
    },
    {
      title: "User",
      sortKey: 6,
      dataIndex: "assignUser",
      key: "assignUser",
      width: "200px",
      sorter: (a, b) => a.assignUser.localeCompare(b.assignUser),
    },
  ];

  const [openSetting, setOpenSetting] = useState(false);
  const [visibleColumns, setVisibleColumns] = useState([...empColumns]);

  useEffect(() => {
    setSelected("2");
  }, []);
  const dispatch = useDispatch();
  const searchHandler = (event) => {
    dispatch(setstatus(null));
    setvalue(event.target.value);
  };
  const keys = ["taskId", "taskType", "priority", "status", "expected"];
  return (
    <Layout>
      <Sider selected={selected} setSelected={setSelected} />
      <Container>
        <Header pageName="Work" />
        <Content>
          <ContentContainer>
            <FirstRow>
              <ContentCard
                data={{ title: "Work By Work Type", bgColor: "#e8ece4" }}
                active={1}
              />
              <ContentCard
                data={{ title: "Priority Breakdown", bgColor: "#e0e0e0" }}
                active={2}
              />
              <ContentCard
                data={{ title: "Status Breakdown", bgColor: "#d8daf5" }}
                active={3}
              />
            </FirstRow>
            {/* <Row >
       
        <Col
          span={10}
          style={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <SearchArea>
            <Input
              onChange={searchHandler}
              placeholder="Search Employee"
              prefix={<SearchOutlined style={{ fontSize: 20 }} />}
              style={{
                borderRadius: 8,
                height: 30,
                backgroundColor: "#f6f6f6",
              }}
            />
          </SearchArea>
          <CSVLink
            style={{ marginBottom: "8px" }}
            headers={headers}
            filename={"Employee_Data"}
            target="_blank"
            data={employee}
          >
            <Button
              style={{
                color: "white",
                backgroundColor: "#333",
                borderRadius: "8px",
              }}
            >
              Download CSV
            </Button>
          </CSVLink>
          <SettingOutlined
            style={{ cursor: "pointer" }}
            onClick={() => {
              setOpenSetting(!openSetting);
            }}
          />
          <SettingModal
            open={openSetting}
            setOpen={setOpenSetting}
            columns={empColumns}
            visibleColumns={visibleColumns}
            setVisibleColumns={setVisibleColumns}
          />
        </Col>
      </Row> */}
            <Row style={{ marginTop: "6rem" }}>
              <Col span={14}></Col>

              <Col
                span={10}
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  alignItems: "center",
                  gap: "1rem",
                }}
              >
                <SearchArea>
                  <Input
                    onChange={searchHandler}
                    placeholder="Search Work"
                    prefix={<SearchOutlined style={{ fontSize: 20 }} />}
                    style={{
                      borderRadius: 8,
                      height: 30,
                      backgroundColor: "#f6f6f6",
                    }}
                  />
                </SearchArea>
                <CSVLink
                  data={data}
                  headers={headers}
                  style={{ marginBottom: "8px" }}
                  filename={"Work_Data"}
                  target="_blank"
                >
                  <Button
                    style={{
                      color: "white",
                      backgroundColor: "#333",
                      borderRadius: "8px",
                    }}
                  >
                    Download CSV
                  </Button>
                </CSVLink>
                <SettingOutlined
                  onClick={() => {
                    setOpenSetting(!openSetting);
                  }}
                />
              </Col>
              <SettingModal
                open={openSetting}
                setOpen={setOpenSetting}
                columns={empColumns}
                visibleColumns={visibleColumns}
                setVisibleColumns={setVisibleColumns}
              />
            </Row>
            <Table
              dataSource={data.filter((val) => {
                if (priority) {
                  return val.priority === priority;
                }
                if (status) {
                  return val.status === status;
                }
                if (type) {
                  return val.taskType === type;
                }
                if (value.trim().length > 0) {
                  return keys.some((key) =>
                    val[key].toLowerCase().includes(value)
                  );
                }
                return val;
              })}
              columns={visibleColumns}
              scroll={{ x: "max-content" }}
            />
          </ContentContainer>
        </Content>
      </Container>
    </Layout>
  );
}
