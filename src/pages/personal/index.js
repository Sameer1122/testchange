import React, { useEffect, useState, useRef } from "react";
import { Button, Col, Input, Row, Select, Modal, Typography } from "antd";

import {
  Header,
  Container,
  HomeCard,
  Sider,
  DemandGraph,
} from "../../components";

import Layout from "../../components/layout";
import classes from "./style.module.css";

import { ExclamationCircleOutlined, UserOutlined } from "@ant-design/icons";
import { Content, ContentContainer } from "./styles";
import { UserPicture, UserPictureP } from "../../components/sider/styles";
import ImageUpload from "../../components/imageUpload";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { editing } from "../../Store/personal";

export default function Personal(props) {
  const data = useSelector((state) => state.personal);
  const [upload, setUpload] = useState(false);
  const [image, setImage] = useState();
  const [preview, setPreview] = useState();
  const [language, setlanguage] = useState(data.language);
  const fileInputRef = useRef();

  useEffect(() => {
    if (image) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(image);
    } else {
      setPreview(null);
    }
  }, [image]);
  const { Option } = Select;

  const dispatch = useDispatch();

  const changeHandler = (values) => {
    setlanguage(values);
  };
  const showConfirm = () => {
    Modal.confirm({
      title: "Do you want to make changes to your profile?",
      icon: <ExclamationCircleOutlined />,

      onOk() {
        const dataa = {
          language,
          image: preview ? preview : data.image,
        };
        dispatch(editing(dataa));
      },
      onCancel() {},
    });
  };
  return (
    <Layout>
      <Sider selected={props.selected} setSelected={props.setSelected} />
      <Container>
        <Header pageName="My Account" />
        <Content>
          <ContentContainer>
            <Row>
              <Col span={24}>
                <div className={classes.titlewrapper}>
                  <UserOutlined />
                  <h6 className={classes.title}>My Account</h6>
                </div>
              </Col>
            </Row>
            <Row className={classes.container}>
              <Col span={24}>
                <Button className={classes.buttonpersonal}>
                  Personal Setting
                </Button>
              </Col>

              <br />

              <Col span={14} style={{ paddingLeft: "1rem" }}>
                <Row style={{ gap: "4rem" }}>
                  <div>
                    <label className={classes.label} htmlFor="">
                      First name
                    </label>{" "}
                    <br />
                    <Input
                      defaultValue={data.FirstName}
                      placeholder="Basic usage"
                      disabled
                      className={classes.input}
                    />
                  </div>
                  <div>
                    <label className={classes.label} htmlFor="">
                      Last name
                    </label>{" "}
                    <br />
                    <Input
                      defaultValue={data.LastName}
                      disabled
                      placeholder="Basic usage"
                      className={classes.input}
                    />
                  </div>
                </Row>
                <Row style={{ gap: "4rem" }}>
                  <div>
                    <label className={classes.label} htmlFor="">
                      Email
                    </label>{" "}
                    <br />
                    <Input
                      defaultValue={data.Email}
                      disabled
                      placeholder="Basic usage"
                      className={classes.input}
                    />
                  </div>
                  <div>
                    <label className={classes.label} htmlFor="">
                      Phone No.
                    </label>{" "}
                    <br />
                    <Input
                      defaultValue={data.phone}
                      placeholder="Basic usage"
                      disabled
                      className={classes.input}
                    />
                  </div>
                </Row>
                <div>
                  <label className={classes.label} htmlFor="">
                    Permissions
                  </label>{" "}
                  <br />{" "}
                  <Input
                    style={{ width: "35%" }}
                    defaultValue={data.permission}
                    disabled
                    placeholder="Basic usage"
                    className={classes.input}
                  />
                </div>
                <div>
                  <label className={classes.label} htmlFor="">
                    Language
                  </label>{" "}
                  <br />
                  <Select
                    onChange={changeHandler}
                    defaultValue={data.language}
                    style={{
                      width: "35%",
                    }}
                  >
                    <Option value="arabic">Arabic</Option>
                    <Option value="english">English</Option>
                    <Option value="french">French</Option>
                    <Option value="german">German</Option>
                  </Select>
                </div>
              </Col>
              <Col span={4} />
              <Col
                span={4}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <ImageUpload
                  open={upload}
                  setOpen={setUpload}
                  setImage={setImage}
                  fileInputRef={fileInputRef}
                />
                <UserPictureP
                  icon={
                    preview || data.image.trim().length > 0 ? (
                      <img src={preview ? preview : data.image} />
                    ) : (
                      <UserOutlined style={{ fontSize: "72px" }} />
                    )
                  }
                />
                <Button
                  onClick={() => {
                    setUpload(!upload);
                  }}
                  className={classes.upload}
                >
                  Update
                </Button>
              </Col>
              <Col span={24} />
              <Col span={24}>
                <Row
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "8rem",
                    gap: "1rem",
                  }}
                >
                  <Button
                    onClick={showConfirm}
                    style={{
                      background: "#333333",
                      color: "white",
                      borderRadius: "8px",
                      width: "8%",
                    }}
                  >
                    Save
                  </Button>
                  <Button style={{ borderRadius: "8px" }}>Cancel</Button>
                </Row>
              </Col>
            </Row>
          </ContentContainer>
        </Content>
      </Container>
    </Layout>
  );
}
