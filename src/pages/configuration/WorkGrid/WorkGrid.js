import { Col, Input, Row, Table, Modal, Button } from "antd";
import React, { useState } from "react";
import SettingModal from "../../../components/settingModal";
import { CardTable, SearchArea } from "../styles";
import { useDispatch, useSelector } from "react-redux";
import { decrement, editing, increment } from "../../../Store/worktypes";
import { SearchOutlined } from "@ant-design/icons";
import { CSVLink } from "react-csv";

import {
  DeleteFilled,
  EditFilled,
  ExclamationCircleOutlined,
  PlusSquareFilled,
  SettingOutlined,
} from "@ant-design/icons";
import Add from "../Modal/Add";
import Edit from "../Modal/Edit";

const WorkGrid = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [openSetting, setOpenSetting] = useState(false);
  const [editModal, seteditModal] = useState(false);
  const [value, setvalue] = useState("");
  const [currentEdit, setcurrentEdit] = useState();
  const dispatch = useDispatch();
  const caseType = useSelector((state) => state.worktypes.workType);
  const showDeleteConfirm = (id) => {
    Modal.confirm({
      title: "Are you sure delete this Row?",
      icon: <ExclamationCircleOutlined />,
      content: "This action can't be undone!",
      okText: "Yes",
      okType: "danger",
      cancelText: "No",
      onOk() {
        dispatch(decrement(id));
      },
      onCancel() {},
    });
  };
  const deleteHandler = (event, record) => {
    const id = record.key;
    showDeleteConfirm(id);
  };
  const searchHandler = (event) => {
    setvalue(event.target.value);
  };
  const columns = [
    {
      title: "Work Type",
      dataIndex: "workType",
      key: "workType",
      width: "200px",
      sorter: (a, b) => a.workType.localeCompare(b.workType),
    },
    {
      title: "Operation Code",
      dataIndex: "operationCode",
      key: "operationCode",
      width: "200px",
      sorter: (a, b) => a.workType.localeCompare(b.workType),
    },
    {
      title: "Duration",
      dataIndex: "duration",
      key: "duration",
      width: "200px",
      sorter: (a, b) => {
        if (a.duration > b.duration) return 1;
        if (a.duration < b.duration) return -1;
        return 0;
      },
    },
    {
      title: "Goals Per Hour",
      dataIndex: "goalPerHour",
      key: "goalPerHour",
      width: "200px",
      sorter: (a, b) => {
        if (a.goalPerHour > b.goalPerHour) return 1;
        if (a.goalPerHour < b.goalPerHour) return -1;
        return 0;
      },
    },
    {
      title: (
        <div style={{ display: "flex", alignItems: "center" }}>
          Actions{" "}
          <PlusSquareFilled
            onClick={() => setIsModalVisible(true)}
            style={{ paddingLeft: "10px", color: "#39BC9E", cursor: "pointer" }}
          />
        </div>
      ),
      dataIndex: "actions",
      key: "actions",
      width: "125px",
      render: (text, record, index) => (
        <>
          <DeleteFilled
            onClick={(e) => deleteHandler(e, record)}
            style={{ color: "#FD79A8", cursor: "pointer" }}
          />
          <EditFilled
            onClick={() => {
              setcurrentEdit(record);
              seteditModal(true);
            }}
            style={{ marginLeft: "25px", color: "blue", cursor: "pointer" }}
          />
        </>
      ),
    },
  ];

  const [visibleColumns, setVisibleColumns] = useState([...columns]);
  const headers = [
    { label: "Work Type", key: "workType" },
    { label: "Operation Code", key: "operationCode" },
    { label: "duration", key: "duration" },
    { label: "Goal per Hour", key: "goalPerHour" },
  ];
  return (
    <CardTable>
      {/* Start of modals */}
      <Edit
        seteditModal={seteditModal}
        editModal={editModal}
        currentEdit={currentEdit}
      />

      <Add
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
      />
      {/* End of modals */}
      <Row
        style={{
          border: "1px solid #bfbfbf",
          width: "100%",
          borderRadius: "8px",
          padding: "8px",
          margin: "3vh 0 4vh 0",
        }}
      >
        <Col span={18} />
        <Col span={6} style={{ display: "flex", justifyContent: "center" }}>
          <SearchArea style={{ visibility: "hidden" }}>
            <Input
              onChange={searchHandler}
              placeholder="Search Work Type"
              prefix={<SearchOutlined style={{ fontSize: 20 }} />}
              style={{
                borderRadius: 8,
                height: 30,
                backgroundColor: "#f6f6f6",
              }}
            />
          </SearchArea>
        </Col>
      </Row>
      <Row style={{ marginBottom: "1rem" }}>
        <Col span={14} />
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
              placeholder="Search Work Type"
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
            filename={"Work_Types_Data"}
            target="_blank"
            data={caseType}
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
            columns={columns}
            visibleColumns={visibleColumns}
            setVisibleColumns={setVisibleColumns}
          />
        </Col>
      </Row>
      <Table
        dataSource={caseType.filter((data) => {
          if (value === "") {
            return data;
          } else if (
            data.workType.toLowerCase().includes(value.toLocaleLowerCase())
          ) {
            return data;
          }
        })}
        columns={visibleColumns}
        scroll={{ x: "max-content" }}
      />
    </CardTable>
  );
};

export default WorkGrid;
