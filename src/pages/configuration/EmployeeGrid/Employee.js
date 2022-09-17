import { Col, Input, Row, Table, Modal, Button } from "antd";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CardTable, SearchArea } from "../styles";
import { CSVLink } from "react-csv";
import {
  DeleteFilled,
  EditFilled,
  ExclamationCircleOutlined,
  PlusSquareFilled,
  SearchOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import Add from "../EmpModal/Add";
import Edit from "../EmpModal/Edit";
import { decrement } from "../../../Store/employee";
import SettingModal from "../../../components/settingModal";

const Employee = () => {
  const [value, setvalue] = useState("");
  const [editModal, seteditModal] = useState(false);
  const [openSetting, setOpenSetting] = useState(false);
  const [active, setactive] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [currentEdit, setcurrentEdit] = useState();
  const employee = useSelector((state) => state.employee.empData);
  const dispatch = useDispatch();
  const showDeleteConfirm = (id) => {
    Modal.confirm({
      title: "Are you sure delete this Employee?",
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
  const empColumns = [
    {
      title: "Email",
      sortKey: 1,
      dataIndex: "Email",
      key: "Email",
      width: "200px",
      sorter: (a, b) => a.Email.localeCompare(b.Email),
    },
    {
      title: "First Name",
      sortKey: 2,
      dataIndex: "FirstName",
      key: "FirstName",
      width: "200px",
      sorter: (a, b) => a.FirstName.localeCompare(b.FirstName),
    },
    {
      title: "Last Name",
      dataIndex: "LastName",
      sortKey: 3,
      key: "LastName",
      width: "200px",
      sorter: (a, b) => a.LastName.localeCompare(b.LastName),
    },
    {
      title: "Loaded Cost",
      sortKey: 4,
      dataIndex: "LoadedCost",
      key: "LoadedCost",
      width: "200px",
      sorter: (a, b) => {
        if (a.LoadedCost > b.LoadedCost) return 1;
        if (a.LoadedCost < b.LoadedCost) return -1;
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
      sortKey: 6,
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
  const headers = [
    { label: "First Name", key: "FirstName" },
    { label: "Last Name", key: "LastName" },
    { label: "Email", key: "Email" },
    { label: "Loaded Cost", key: "LoadedCost" },
  ];
  const [visibleColumns, setVisibleColumns] = useState([...empColumns]);

  return (
    <CardTable>
      <Add
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
      />
      <Edit
        editModal={editModal}
        seteditModal={seteditModal}
        currentEdit={currentEdit}
      />
      <Row
        style={{
          border: "1px solid #bfbfbf",
          width: "100%",
          borderRadius: "8px",
          padding: "8px",
          margin: "3vh 0 4vh 0",
        }}
      >
        <Col span={18}>
          <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
            <h6 style={{ color: "#868686", paddingLeft: "8px", margin: 0 }}>
              Loaded Labor cost default
            </h6>
            <div style={{ marginBottom: "4px" }}>
              <span style={{ fontSize: "16px", fontWeight: "bold" }}>$</span>
              <input
                onChange={() => setactive(true)}
                onClick={(event) => event.stopPropagation()}
                className="input-template2"
                type="number"
                defaultValue={30}
              />
            </div>
          </div>
        </Col>
        <Col
          span={6}
          style={{
            display: "flex",
            gap: "1rem",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {active && (
            <>
              <Button
                onClick={() => setactive(false)}
                style={{
                  backgroundColor: "#333",
                  color: "white",
                  borderRadius: "8px",
                }}
              >
                Save
              </Button>
              <Button
                onClick={() => setactive(false)}
                style={{ borderRadius: "8px" }}
              >
                Cancel
              </Button>{" "}
            </>
          )}
        </Col>
      </Row>
      <Row style={{ marginBottom: "1rem" }}>
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
      </Row>
      <Table
        dataSource={employee.filter((data) => {
          if (value === "") {
            return data;
          } else if (
            data.FirstName.toLowerCase().includes(value.toLocaleLowerCase())
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

export default Employee;
