import React from "react";
import { Row, Button } from "antd";
import { CardContainer, CardTitle, CardTitleText, CardText1 } from "./styles";

export default function ConfigurationCard({ data }) {
  const title = data?.title;
  const text1 = data?.text1;
  const text2 = data?.text2;

  return (
    <CardContainer>
      <CardTitle>
        <CardTitleText>{title}</CardTitleText>
      </CardTitle>
      <CardText1>{text1}</CardText1>
      <Row justify="center">
        <Button
          size="large"
          style={{
            width: "70%",
            borderRadius: "10px",
            backgroundColor: "#404655",
            color: "#ebecec",
            fontWeight: "bold",
          }}
        >
          Define
        </Button>
      </Row>
      <CardText1>{text2}</CardText1>
    </CardContainer>
  );
}
