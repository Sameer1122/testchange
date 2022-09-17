import React, { useEffect, useState } from "react";
import { Header, Container, Sider } from "../../components";
import { Content, ContentContainer, FirstRow } from "./styles";
import { columns, dataSource } from "./mockData";
import { Row, Table, Col, Button, Input } from "antd";
import Layout from "../../components/layout";
import ContentCard from "../../components/contentCard";
import { SettingOutlined, SearchOutlined } from "@ant-design/icons";
import SettingModal from "../../components/settingModal";
import { CSVLink } from "react-csv";
import { SearchArea } from "../configuration/styles";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setcarrier } from "../../Store/transportation";

export default function Transportation({ selected, setSelected }) {
  const [value, setvalue] = useState("");
  const data = useSelector((state) => state.transportation.transportation);
  const mode = useSelector((state) => state.transportation.mode);
  const carrier = useSelector((state) => state.transportation.carrier);
  const bound = useSelector((state) => state.transportation.bound);

  console.log(bound);
  const headers = [
    { label: "Load ID", key: "loadedId" },
    { label: "Tractor Number", key: "tractorNumber" },
    { label: "Trailer Number", key: "trailerNumber" },
    { label: "Carrier", key: "carrier" },
    { label: "Type", key: "type" },
    { label: "Status", key: "status" },
    { label: "Mode", key: "mode" },
    { label: "Origin", key: "origin" },
    { label: "Destination", key: "destination" },
    { label: "Current Location", key: "currentLocation" },
    { label: "Expected Time of Arrival", key: "estimateTime" },
  ];
  const keys = [
    "loadedId",
    "tractorNumber",
    "trailerNumber",
    "carrier",
    "type",
    "status",
    "mode",
    "origin",
    "destination",
    "currentLocation",
    "estimateTime",
  ];
  const empColumns = [
    {
      title: "Load ID",
      sortKey: 1,
      dataIndex: "loadedId",
      key: "loadedId",
      width: "200px",
      sorter: (a, b) => a.loadedId.localeCompare(b.loadedId),
    },
    {
      title: "Tractor Number",
      sortKey: 2,
      dataIndex: "tractorNumber",
      key: "tractorNumber",
      width: "200px",
      sorter: (a, b) => a.tractorNumber.localeCompare(b.tractorNumber),
    },
    {
      title: "Trailer Number",
      dataIndex: "trailerNumber",
      sortKey: 3,
      key: "trailerNumber",
      width: "200px",
      sorter: (a, b) => a.trailerNumber.localeCompare(b.trailerNumber),
    },
    {
      title: "Carrier",
      sortKey: 4,
      dataIndex: "carrier",
      key: "carrier",
      width: "200px",
      sorter: (a, b) => a.carrier.localeCompare(b.carrier),
    },
    {
      title: "Type",
      sortKey: 5,
      dataIndex: "type",
      key: "type",
      sorter: (a, b) => a.type.localeCompare(b.type),
    },
    {
      title: "Status",
      sortKey: 6,
      dataIndex: "status",
      key: "status",
      sorter: (a, b) => a.status.localeCompare(b.status),
    },

    {
      title: "Mode",
      sortKey: 7,
      dataIndex: "mode",
      key: "mode",
      width: "200px",
      sorter: (a, b) => a.mode.localeCompare(b.mode),
    },
    {
      title: "Origin",
      sortKey: 8,
      dataIndex: "origin",
      key: "origin",
      width: "200px",
      sorter: (a, b) => a.origin.localeCompare(b.origin),
    },
    {
      title: "Destination",
      sortKey: 9,
      dataIndex: "destination",
      key: "destination",
      width: "200px",
      sorter: (a, b) => a.destination.localeCompare(b.destination),
    },
    {
      title: "Current Location",
      sortKey: 10,
      dataIndex: "currentLocation",
      key: "currentLocation",
      width: "200px",
      sorter: (a, b) => a.currentLocation.localeCompare(b.currentLocation),
    },
    {
      title: "Estimated Time of Arrival",
      sortKey: 11,
      dataIndex: "estimateTime",
      key: "estimateTime",
      width: "200px",
      sorter: (a, b) => a.estimateTime.localeCompare(b.estimateTime),
    },
  ];

  // Store the current datasets
  const [openSetting, setOpenSetting] = useState(false);
  const [visibleColumns, setVisibleColumns] = useState([...empColumns]);

  useEffect(() => {
    setSelected("3");
  }, []);
  const dispatch = useDispatch();
  const searchHandler = (event) => {
    dispatch(setcarrier(null));
    setvalue(event.target.value);
  };
  return (
    <Layout>
      <Sider selected={selected} setSelected={setSelected} />
      <Container>
        <Header pageName="Transportation" />
        <Content>
          <ContentContainer>
            <FirstRow>
              <ContentCard
                data={{ title: "Inbound/Outbound", bgColor: "#e8ece4" }}
                active={4}
              />
              <ContentCard
                data={{ title: "Mode", bgColor: "#e0e0e0" }}
                active={5}
              />
              <ContentCard
                data={{ title: "Carrier", bgColor: "#d8daf5" }}
                active={6}
              />
            </FirstRow>
            <Row style={{ marginTop: "6rem" }}>
              {/* here */}
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
                    placeholder="Search Transportation"
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
                  filename={"Transportation_Data"}
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
                <SettingModal
                  open={openSetting}
                  setOpen={setOpenSetting}
                  columns={empColumns}
                  visibleColumns={visibleColumns}
                  setVisibleColumns={setVisibleColumns}
                />
              </Col>
            </Row>
            <Table
              dataSource={data.filter((val) => {
                if (mode) {
                  return val.mode === mode;
                }
                if (carrier) {
                  return val.carrier.toLowerCase() === carrier.toLowerCase();
                }
                if (bound) {
                  return val.status === bound;
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
