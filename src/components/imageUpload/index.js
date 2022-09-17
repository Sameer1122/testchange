import React from "react";
import { Modal, Row, Upload, Button } from "antd";

const ImageUpload = (props) => {
  const { open, setOpen, setImage, fileInputRef } = props;
  return (
    <Modal
      visible={open}
      destroyOnClose
      onOk={() => {
        setOpen(!open);
      }}
      onCancel={() => {
        setOpen(!open);
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
        Update Your Profile Picture
      </Row>
      <Row style={{ height: "25vh" }}></Row>
      <Row style={{ display: "flex", justifyContent: "center" }}>
        <Button
          onClick={(event) => {
            event.preventDefault();
            fileInputRef.current.click();
          }}
          type="primary"
          size="small"
          style={{ width: "5vw" }}
        >
          Upload
        </Button>
        <input
          type="file"
          style={{ display: "none" }}
          ref={fileInputRef}
          accept="image/*"
          onChange={(event) => {
            const file = event.target.files[0];
            if (file && file.type.substr(0, 5) === "image") {
              setImage(file);
              setOpen(!open);
            } else {
              setImage(null);
            }
          }}
        />
        <Button
          type="primary"
          onClick={() => {
            setOpen(!open);
          }}
          size="small"
          style={{
            width: "5vw",
            marginLeft: "10px",
            backgroundColor: "#FFFFFF",
            color: "#666667",
            borderColor: "#FFFFFF",
          }}
        >
          Cancel
        </Button>
      </Row>
    </Modal>
  );
};

export default ImageUpload;
