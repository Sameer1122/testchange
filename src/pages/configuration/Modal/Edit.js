import { Button, Form, Input, InputNumber, Modal, Row, TimePicker } from "antd";
import moment from "moment";
import React from "react";
import { useDispatch } from "react-redux";
import uuid from "react-uuid";
import { editing } from "../../../Store/worktypes";

const Edit = ({ editModal, seteditModal, currentEdit }) => {
  const dispatch = useDispatch();
  return (
    <Modal
      visible={editModal}
      destroyOnClose
      onOk={() => {
        seteditModal(!editModal);
      }}
      onCancel={() => {
        seteditModal(!editModal);
      }}
      footer={null}
      style={{
        borderRadius: "100px",
        height: "50vh",
      }}
    >
      <Row
        style={{
          width: "100%",
          fontSize: "20px",
          color: "#007aff",
          fontWeight: "bold",
          textAlign: "center",
        }}
        justify="center"
      >
        Edit the Row
      </Row>
      <Form
        name="basic"
        initialValues={{
          duration:
            moment(currentEdit?.duration, "HH:mm") || moment("12:08", "HH:mm"),
          goalPerHour: currentEdit?.goalPerHour || 0,
          key: currentEdit?.key || "",
          operationCode: currentEdit?.operationCode || 0,
          workType: currentEdit?.workType || 0,
        }}
        labelCol={{
          span: 24,
        }}
        wrapperCol={{
          span: 24,
        }}
        onFinish={(values) => {
          const data = {
            workType: values.workType,
            operationCode: values.operationCode,
            duration: moment(values.duration).format("HH:mm"),
            goalPerHour: values.goalPerHour,
            key: currentEdit.key,
          };
          dispatch(editing(data));
          seteditModal(false);
        }}
        autoComplete="off"
      >
        <Form.Item
          label="Work Type"
          name="workType"
          rules={[
            {
              required: true,
              message: "Please input Work Type",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Operation Code"
          name="operationCode"
          rules={[
            {
              required: true,
              message: "Please input Operation Code",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Duration"
          name="duration"
          rules={[
            {
              required: true,
              message: "Please input Duration",
            },
          ]}
        >
          <TimePicker format={"HH:mm"} />
        </Form.Item>
        <Form.Item
          label="Goals per hour"
          name="goalPerHour"
          rules={[
            {
              required: true,
              message: "Please input Goals per hour",
            },
          ]}
        >
          <InputNumber min={0} />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 9,
            span: 24,
          }}
        >
          <Button type="primary" htmlType="submit" style={{ width: "50%" }}>
            Add
          </Button>
          <Button
            onClick={() => seteditModal(false)}
            type="secondry"
            style={{ width: "50%" }}
          >
            Cancel
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default Edit;
