import React from "react";
import { useState } from "react";
import CalenderHeader from "./header";
import moment from "moment";
import { Row } from "antd";
import WeeklyView from "./weeklyView";

const Calendar = () => {
  const [date, setDate] = useState({
    year: moment().year(),
    month: moment().month(),
    date: moment().date(),
    day: moment().day(),
    eom: moment().endOf("month").date(),
  });

  return (
    <Row
      style={{
        width: "100%",
        padding: "20px 50px",
        backgroundColor: "#f4f8ff",
        borderBottom: "2px solid #ecedf0",
      }}
    >
      <CalenderHeader date={date} setDate={setDate} />
      <WeeklyView date={date} setDate={setDate} />
    </Row>
  );
};

export default Calendar;
