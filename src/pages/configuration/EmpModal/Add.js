import { Button, Form, Input, InputNumber, Modal, Row } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import uuid from "react-uuid";
import { increment } from "../../../Store/employee";

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
        ADD NEW EMPLOYEE
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
          const data = {
            key: uuid(),
            FirstName: values.first,
            LastName: values.last,
            Email: values.email,
            LoadedCost: values.cost,
          };
          dispatch(increment(data));
          setIsModalVisible(false);
        }}
        autoComplete="off"
      >
        <Form.Item
          label="First Name"
          name="first"
          rules={[
            {
              required: true,
              message: "Please input first name of employee",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Last Name"
          name="last"
          rules={[
            {
              required: true,
              message: "Please input last name of employee",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              type: "email",
              message: "The input is not a valid E-mail!",
            },
            {
              required: true,
              message: "Please input employee email",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Loaded Cost"
          name="cost"
          rules={[
            {
              required: true,
              message: "Please input employee cost",
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
