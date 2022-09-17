import {
  DeleteFilled,
  DeleteOutlined,
  EditFilled,
  EditOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import { Button } from "antd";

export const dataSource = [
  {
    key: "1",
    workType: "Pallet Pick",
    operationCode: "PPCK",
    duration: 60,
    goalPerHour: 60,
  },
  {
    key: "2",
    workType: "Case Pick",
    operationCode: "CPCK",
    duration: 50,
    goalPerHour: 20,
  },
  {
    key: "3",
    workType: "Recieving",
    operationCode: "RCV",
    duration: 40,
    goalPerHour: 30,
  },
  {
    key: "4",
    workType: "Put Away",
    operationCode: "PTWAY",
    duration: 30,
    goalPerHour: 50,
  },
  {
    key: "5",
    workType: "Unloading",
    operationCode: "Unnload",
    duration: 65,
    goalPerHour: 35,
  },
];

export const columns = [
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
        <PlusOutlined
          style={{ paddingLeft: "10px", color: "green", cursor: "pointer" }}
        />
      </div>
    ),
    dataIndex: "goalPerHour",
    key: "goalPerHour",
    width: "125px",
    render: () => (
      <>
        <DeleteFilled style={{ color: "#FD79A8", cursor: "pointer" }} />
        <EditFilled
          style={{ marginLeft: "25px", color: "blue", cursor: "pointer" }}
        />
      </>
    ),
  },
];
