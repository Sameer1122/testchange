import React, { useState } from "react";
import { Button, Row, Modal, Form, Input, Select } from "antd";
import { colors } from "./mockData";
import { useDispatch, useSelector } from "react-redux";
import { increment } from "../../Store/roles";
import "./styles.css";

const Roles = ({ RolesData, setRolesData }) => {
  const rolesData = useSelector((state) => state.roles);

  const dispatch = useDispatch();
  const [roles, setRoles] = useState(rolesData);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { Option } = Select;
  const handleChange = (value) => {};
  return (
    <>
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
          ADD NEW ROLE
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
            // setRoles([...roles, { ...values }]);
            const data = {
              GroupText: values.name,
              type: values.type,
              GroupId: RolesData.length + 1,
              Id: RolesData.length + 1,
              GroupColor: colors[RolesData.length % 6]?.bgColor,
              Name: values.name,
              count: 1,
            };

            setRoles([...roles, { ...data }]);
            setRolesData([...RolesData, { ...data }]);

            setIsModalVisible(!isModalVisible);
          }}
          autoComplete="off"
        >
          <Form.Item
            label="Role Name"
            name="name"
            rules={[
              {
                required: true,
                message: "Please input role name",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Task Type"
            name="type"
            rules={[
              {
                required: true,
                message: "Please select task type",
              },
            ]}
          >
            <Select
              mode="multiple"
              style={{
                width: "100%",
              }}
              placeholder="select types"
              onChange={handleChange}
              optionLabelProp="label"
            >
              <Option value="Pallet Pick" label="Pallet Pick">
                <div className="demo-option-label-item">
                  <span role="img" aria-label="Pallet Pick">
                    Pallet Pick
                  </span>
                </div>
              </Option>
              <Option value="Case Pick" label="Case Pick">
                <div className="demo-option-label-item">
                  <span role="img" aria-label="Case Pick">
                    Case Pick
                  </span>
                </div>
              </Option>
              <Option value="Replenishment " label="Replenishment ">
                <div className="demo-option-label-item">
                  <span role="img" aria-label="Replenishment ">
                    Replenishment
                  </span>
                </div>
              </Option>
              <Option value="other" label="other options">
                <div className="demo-option-label-item">
                  <span role="img" aria-label="other options">
                    other
                  </span>
                </div>
              </Option>
            </Select>
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
      <Row
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "30px 15px 6px",
          borderRight: "2px solid #ecedf0",
        }}
      >
        <Button
          type="dashed"
          size="large"
          style={{
            backgroundColor: "#e4ebff",
            color: "#71a2dc",
            borderColor: "#71a2dc",
            fontWeight: "bold",
            width: "100%",

            marginBottom: "15px",
          }}
          onClick={() => {
            setIsModalVisible(!isModalVisible);
          }}
        >
          Add Role +
        </Button>

        {/* {roles?.map((role, index) => {
          return (
            <Button
              type="primary"
              draggable="true"
              style={{
                backgroundColor: colors[index % 6]?.bgColor,
                color: colors[index % 6]?.color,
                fontWeight: "bold",
                width: "100%",
                borderWidth: "0px",
                margin: "8px 0",
              }}
            >
              {role?.name}
            </Button>
          );
        })} */}
      </Row>
    </>
  );
};

export default Roles;
