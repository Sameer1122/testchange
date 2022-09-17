import { Button, Form, Input, InputNumber, Modal, Row } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import uuid from "react-uuid";
import { editing } from "../../../Store/employee";

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
        Edit Employee
      </Row>
      <Form
        name="basic"
        initialValues={currentEdit}
        labelCol={{
          span: 24,
        }}
        wrapperCol={{
          span: 24,
        }}
        onFinish={(values) => {
          const data = {
            FirstName: values.FirstName,
            LastName: values.LastName,
            Email: values.Email,
            LoadedCost: values.LoadedCost,

            key: currentEdit.key,
          };
          dispatch(editing(data));
          seteditModal(false);
        }}
        autoComplete="off"
      >
        <Form.Item
          label="First Name"
          name="FirstName"
          rules={[
            {
              required: true,
              message: "Please input First Name",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Last Name"
          name="LastName"
          rules={[
            {
              required: true,
              message: "Please input Last Name",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Email"
          name="Email"
          rules={[
            {
              type: "email",
              message: "The input is not valid E-mail!",
            },
            {
              required: true,
              message: "Please input Email",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Loaded Cost"
          name="LoadedCost"
          rules={[
            {
              required: true,
              message: "Please input Loaded Cost",
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
