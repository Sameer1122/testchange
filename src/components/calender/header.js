import React, { useState } from "react";
import {
  Row,
  Col,
  Typography,
  Button,
  DatePicker,
  Popover,
  Modal,
  Dropdown,
} from "antd";
import { DatePickerComponent } from "@syncfusion/ej2-react-calendars";
import { monthNames } from "./constants";
import moment from "moment";
import {
  CaretLeftOutlined,
  CaretRightOutlined,
  DownOutlined,
  ExclamationCircleOutlined,
} from "@ant-design/icons";
import uuid from "react-uuid";

const CalenderHeader = ({
  scheduleObj,
  scheduleData,
  active,
  setactive,
  date,
  setDate,
  ...props
}) => {
  const warning = () => {
    Modal.warning({
      title: "Last month is empty!",
      content: "There is nothing to copy from last Month",
    });
  };
  const showDeleteConfirm = (filteredDates) => {
    Modal.confirm({
      title: "Are you sure you want to clear this day?",
      icon: <ExclamationCircleOutlined />,
      content: "This action can't be undone",
      okText: "Yes",
      okType: "danger",
      cancelText: "No",
      onOk() {
        const data = filteredDates.map((val) => {
          scheduleObj.deleteEvent(val.Id);
        });
      },
      onCancel() {},
    });
  };
  const showMDeleteConfirm = (filteredDates) => {
    Modal.confirm({
      title: "Are you sure you want to clear this Month?",
      icon: <ExclamationCircleOutlined />,
      content: "This action can't be undone",
      okText: "Yes",
      okType: "danger",
      cancelText: "No",
      onOk() {
        const data = filteredDates.map((val) => {
          scheduleObj.deleteEvent(val.Id);
        });
      },
      onCancel() {},
    });
  };
  const copyPrevious = (filteredDates) => {
    Modal.confirm({
      title: "Are you sure you want to copy previous Month?",
      icon: <ExclamationCircleOutlined />,
      content: "",
      okText: "Yes",
      okType: "danger",
      cancelText: "No",
      onOk() {
        const modifedData = filteredDates.map((val) => {
          val.Id = uuid();
          val.StartTime = new Date(
            val.StartTime.setMonth(val.StartTime.getMonth() + 1)
          );
          val.EndTime = new Date(
            val.EndTime.setMonth(val.EndTime.getMonth() + 1)
          );
          scheduleObj.addEvent(val);
          return val;
        });
      },
      onCancel() {},
    });
  };
  const clearDay = () => {
    let currentViewDates = scheduleObj.getCurrentViewDates();
    // start date of view
    let startDate = currentViewDates[0];
    // end date of view
    let endDate = currentViewDates[currentViewDates.length - 1];
    let end = new Date(endDate);
    end.setHours(end.getHours() + 24);
    // filtered Data of specific view
    const filteredDates = scheduleData.filter(
      (val) =>
        new Date(val.StartTime) > new Date(startDate) &&
        new Date(val.StartTime) < end
    );
    showDeleteConfirm(filteredDates);
  };
  const clearMonth = () => {
    let currentViewDates = scheduleObj.getCurrentViewDates();
    // start date of view
    let datee = currentViewDates[0];
    let monthDate = new Date(datee);
    let y = monthDate.getFullYear();
    let m = date.month;
    let startDate = new Date(y, m, 1);
    let lastDate = new Date(y, m + 1, 0);
    lastDate.setHours(lastDate.getHours() + 24);
    const filteredDates = scheduleData.filter(
      (val) =>
        new Date(val.StartTime) > new Date(startDate) &&
        new Date(val.StartTime) < lastDate
    );

    showMDeleteConfirm(filteredDates);
  };
  const copyPreviousMonth = () => {
    let currentViewDates = scheduleObj.getCurrentViewDates();
    // start date of view
    let datee = currentViewDates[0];
    let monthDate = new Date(datee);
    let y = monthDate.getFullYear();
    let m = date.month - 1;
    let startDate = new Date(y, m, 1);
    let lastDate = new Date(y, m + 1, 0);
    lastDate.setHours(lastDate.getHours() + 24);
    let arrayCopy = JSON.parse(JSON.stringify(scheduleData));
    const filteredDates = arrayCopy.filter(
      (val) =>
        new Date(val.StartTime) > new Date(startDate) &&
        new Date(val.StartTime) < lastDate
    );
    if (filteredDates.length === 0) {
      warning();
      return;
    }
    filteredDates.forEach((val) => {
      val.StartTime = new Date(val.StartTime);
      val.EndTime = new Date(val.EndTime);
    });

    copyPrevious(filteredDates);
  };
  const change = (selectedDate) => {
    const newDate = new Date(selectedDate.value);

    const modifedDate = moment(newDate);
    if (modifedDate) {
      setDate({
        year: modifedDate?.year(),
        month: modifedDate?.month(),
        date: modifedDate?.date(),
        day: modifedDate?.day(),
        eom: modifedDate?.endOf("month").date(),
      });
      const datee = new Date(`${date.day}-${date.month}-${date.year}`);
      scheduleObj.selectedDate = selectedDate.value;
      scheduleObj.dataBind();
    }
  };
  const content = (
    <Row style={{ width: "13vw", backgroundColor: "white" }}>
      {props.isMonth && (
        <>
          <Col xs={24} style={{ margin: "4px 4px" }}>
            <Typography.Text
              onClick={clearMonth}
              className="action-class"
              style={{
                fontSize: "16px",
                cursor: "pointer",
                fontWeight: "400",
                display: "block",
              }}
            >
              Clear Month
            </Typography.Text>
          </Col>
          <Col xs={24} style={{ margin: "4px 0" }}>
            <Typography.Text
              onClick={copyPreviousMonth}
              className="action-class"
              style={{
                fontSize: "16px",
                cursor: "pointer",
                fontWeight: "400",
                display: "block",
              }}
            >
              Copy previous month
            </Typography.Text>
          </Col>
        </>
      )}
      {!props.isMonth && (
        <>
          <Col xs={24} className="action-class">
            <Typography.Text
              style={{
                fontSize: "16px",
                cursor: "pointer",
                fontWeight: "300",
              }}
            >
              <span onClick={clearDay}> Clear Day </span>
            </Typography.Text>
          </Col>
        </>
      )}
    </Row>
  );

  return (
    <Row
      style={{
        width: "100%",
        height: "65px",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Col xs={17} style={{ padding: 0 }}>
        {!props.isMonth && (
          <Typography.Text
            style={{
              fontSize: "22px",
              fontWeight: "bold",
              display: "flex",
              alignItems: "center",
            }}
          >
            {/* <DatePicker
              // date={this.state.dateFrom}
              style={{ width: 40 }}
              format="DD-MM-YYYY"
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              allowClear={false}
              bordered={false}
              customStyles={{
                dateIcon: {
                  width: 30,
                  height: 30,
                },
                dateInput: {
                  height: 0,
                  width: 0,
                },
              }}
              onChange={(selectedDate) => {
                if (selectedDate) {
                  setDate({
                    year: selectedDate?.year(),
                    month: selectedDate?.month(),
                    date: selectedDate?.date(),
                    day: selectedDate?.day(),
                    eom: selectedDate?.endOf("month").date(),
                  });
                  const datee = new Date(
                    `${date.day}-${date.month}-${date.year}`
                  );
                  scheduleObj.selectedDate = datee;
                  scheduleObj.dataBind();
                }
              }}
            /> */}
            <DatePickerComponent
              value={new Date().now}
              width="5%"
              showClearButton={false}
              change={change}
            />
            <span
              style={{ paddingRight: "10px", cursor: "pointer" }}
              onClick={() => {
                const newDate = moment(
                  `${date?.month + 1}-${date?.date}-${date?.year}`,
                  "MM-DD-YYYY"
                ).add(-1, "days");

                const currentDate = new Date(
                  `${date.month + 1}-${date.date}-${date.year}`
                );
                var myNewDate = new Date(currentDate);
                myNewDate.setDate(myNewDate.getDate() - 1);
                scheduleObj.selectedDate = myNewDate;
                scheduleObj.dataBind();

                setDate({
                  year: newDate.year(),
                  month: newDate.month(),
                  date: newDate.date(),
                  day: newDate.day(),
                  eom: newDate.endOf("month").date(),
                });
              }}
            >
              <CaretLeftOutlined />
            </span>
            {`${monthNames[date?.month]} `} {date.date} , {date?.year}
            <span
              style={{
                paddingLeft: "10px",
                cursor: "pointer",
              }}
              onClick={() => {
                const newDate = moment(
                  `${date?.month + 1}-${date?.date}-${date?.year}`,
                  "MM-DD-YYYY"
                ).add(1, "days");
                const currentDate = new Date(
                  `${date.month + 1}-${date.date}-${date.year}`
                );
                var myNewDate = new Date(currentDate);
                myNewDate.setDate(myNewDate.getDate() + 1);

                scheduleObj.selectedDate = myNewDate;
                scheduleObj.dataBind();

                setDate({
                  year: newDate.year(),
                  month: newDate.month(),
                  date: newDate.date(),
                  day: newDate.day(),
                  eom: newDate.endOf("month").date(),
                });
              }}
            >
              <CaretRightOutlined />
            </span>
          </Typography.Text>
        )}
        {props.isMonth && (
          <Typography.Text
            style={{
              fontSize: "22px",
              fontWeight: "bold",
              display: "flex",
              alignItems: "center",
            }}
          >
            <DatePickerComponent
              value={new Date().now}
              width="5%"
              start={"Year"}
              onChange={change}
              depth={"Year"}
              format={"'MMMM y"}
            ></DatePickerComponent>
            <span
              style={{ paddingRight: "10px", cursor: "pointer" }}
              onClick={() => {
                const newDate = moment(
                  `${date?.month + 1}-${date?.date}-${date?.year}`,
                  "MM-DD-YYYY"
                ).add(-1, "month");
                const currentDate = new Date(
                  `${date.month + 1}-${date.date}-${date.year}`
                );
                var myNewDate = new Date(currentDate);
                var newdate = new Date(
                  myNewDate.setMonth(myNewDate.getMonth() - 1)
                );

                scheduleObj.selectedDate = newdate;
                scheduleObj.dataBind();

                setDate({
                  year: newDate.year(),
                  month: newDate.month(),
                  date: newDate.date(),
                  day: newDate.day(),
                  eom: newDate.endOf("month").date(),
                });
              }}
            >
              <CaretLeftOutlined />
            </span>
            {`${monthNames[date?.month]} `} {date?.year}
            <span
              style={{
                paddingLeft: "10px",
                cursor: "pointer",
              }}
              onClick={() => {
                const newDate = moment(
                  `${date?.month + 1}-${date?.date}-${date?.year}`,
                  "MM-DD-YYYY"
                ).add(1, "month");
                const currentDate = new Date(
                  `${date.month + 1}-${date.date}-${date.year}`
                );
                let myNewDate = new Date(currentDate);
                let newdate = new Date(
                  myNewDate.setMonth(myNewDate.getMonth() + 1)
                );

                scheduleObj.selectedDate = newdate;
                scheduleObj.dataBind();
                setDate({
                  year: newDate.year(),
                  month: newDate.month(),
                  date: newDate.date(),
                  day: newDate.day(),
                  eom: newDate.endOf("month").date(),
                });
              }}
            >
              <CaretRightOutlined />
            </span>
          </Typography.Text>
        )}
      </Col>
      <Col xs={3} style={{ padding: 0 }}>
        <div
          style={{
            backgroundColor: "#EBF1F3",
            border: "1px solid black",
            borderRadius: "8px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Col
            xs={12}
            onClick={() => {
              setactive(1);
              scheduleObj.currentView = "TimelineDay";
            }}
            style={{
              height: "30px",
              display: "flex",
              justifyContent: "center",
              backgroundColor: `${active === 1 ? "black" : ""}`,
              alignItems: "center",
              cursor: "pointer",
              borderRadius: "4px",
              padding: 0,
            }}
          >
            <Typography.Text
              style={{
                color: `${active === 1 ? "white" : "black"}`,
                fontSize: "12px",
                cursor: "pointer",
              }}
            >
              Day
            </Typography.Text>
          </Col>
          <Col
            xs={12}
            onClick={() => {
              setactive(2);
              scheduleObj.currentView = "Month";
            }}
            style={{
              height: "30px",
              display: "flex",
              cursor: "pointer",
              justifyContent: "center",
              backgroundColor: `${active === 2 ? "black" : ""}`,
              alignItems: "center",
              borderRadius: "4px",
              padding: 0,
            }}
          >
            <Typography.Text
              style={{
                color: "#FFFFFF",
                color: `${active === 2 ? "white" : "black"}`,
                fontSize: "12px",
                cursor: "pointer",
              }}
            >
              Month
            </Typography.Text>
          </Col>
        </div>
      </Col>
      <Col xs={1} />
      <Col xs={3} style={{ padding: 0 }}>
        <Dropdown overlay={content} placement="bottomLeft" trigger="click">
          <Button
            type="secondary"
            style={{
              borderRadius: "6px",
              backgroundColor: "#EBF1F3",
              margin: 0,
              width: "90%",
            }}
          >
            Actions <DownOutlined />
          </Button>
        </Dropdown>
      </Col>
    </Row>
  );
};

export default CalenderHeader;
