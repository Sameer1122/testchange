import { Row, Typography } from "antd";
import React, { useEffect, useState } from "react";
import { dayNames } from "./constants";
import moment from "moment";

const WeeklyView = (props) => {
  const { date, setDate } = props;
  const [start, setStart] = useState(date?.date - date?.day);

  useEffect(() => {
    setStart(date?.date - date?.day);
  }, [date]);
  return (
    <Row
      style={{
        width: "100%",
        height: "65px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      {dayNames?.map((day, index) => {
        return (
          <div
            style={{ cursor: "pointer" }}
            onClick={() => {
              const newDate = moment(
                `${date?.month + 1}-${date?.date}-${date?.year}`,
                "MM-DD-YYYY"
              ).add(index - date?.day, "days");

              setDate({
                year: newDate.year(),
                month: newDate.month(),
                date: newDate.date(),
                day: newDate.day(),
                eom: newDate.endOf("month").date(),
              });
            }}
          >
            <div style={{ height: "25px", textAlign: "center" }}>
              <Typography.Text
                style={{
                  fontSize: "12px",
                  padding: 0,
                  fontWeight: 500,
                }}
              >
                {day}
              </Typography.Text>
            </div>
            <div style={{ textAlign: "center" }}>
              <Typography.Text
                style={{
                  fontSize: "18px",
                  fontWeight: "bold",
                  padding: 0,
                  textAlign: "center",
                }}
              >
                {moment(
                  `${date?.month + 1}-${date?.date}-${date?.year}`,
                  "MM-DD-YYYY"
                )
                  .add(index - date?.day, "days")
                  .date()}
                {/* {(start + index) % (date?.eom + 1) < 10
                  ? `0${(start + index) % (date?.eom + 1)}`
                  : (start + index) % (date?.eom + 1)} */}
              </Typography.Text>
            </div>
            {date.day === index ? (
              <div
                style={{
                  height: "5px",
                  width: "4vw",
                  backgroundColor: "#82c2fb",
                  border: "2px solid #629ad4",
                  borderRadius: "3px",
                }}
              />
            ) : null}
          </div>
        );
      })}
    </Row>
  );
};

export default WeeklyView;
