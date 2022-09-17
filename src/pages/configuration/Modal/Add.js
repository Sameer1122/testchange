import { Button, Form, Input, InputNumber, Modal, Row, TimePicker } from "antd";
import moment from "moment";
import React from "react";
import { useDispatch } from "react-redux";
import uuid from "react-uuid";
import { increment } from "../../../Store/worktypes";

const Add = ({ isModalVisible, setIsModalVisible }) => {
  const dispatch = useDispatch();
  return (
    <Modal
      visible={isModalVisible}
      destroyOnClose
      onOk={() => {
        setIsModalVisible(!isModalVisible);
      }}
      onCancel={() => {
        setIsModalVisible(!isModalVisible);
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
        ADD NEW WORK TYPE
      </Row>
      <Form
        name="basic"
        labelCol={{
          span: 24,
        }}
        wrapperCol={{
          span: 24,
        }}
        onFinish={(values) => {
          console.log(moment(values.duration).format("HH:mm"));
          const data = {
            key: uuid(),
            workType: values.work,
            operationCode: values.operation,
            duration: moment(values.duration).format("HH:mm"),
            goalPerHour: values.goals,
          };
          dispatch(increment(data));
          setIsModalVisible(false);
        }}
        autoComplete="off"
      >
        <Form.Item
          label="Work Type"
          name="work"
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
          name="operation"
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
          name="goals"
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
            onClick={() => setIsModalVisible(false)}
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

export default Add;
