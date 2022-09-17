import { Row, Col } from "antd";
import moment from "moment";
import React, { useState, useEffect } from "react";
import { Layout, Container, Sider, Header, SettingBox } from "../../components";
import { Button, Modal, Form, Input, Select } from "antd";
import {
  DeleteOutlined,
  EditOutlined,
  ExclamationCircleOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import { colors } from "../../components/roles/mockData";
import { closest, addClass } from "@syncfusion/ej2-base";
import uuid from "react-uuid";
import { TreeViewComponent } from "@syncfusion/ej2-react-navigations";
import Roles from "../../components/roles";
import { Content, ContentContainer } from "./styles";

import "./styles.css";
import {
  ScheduleComponent,
  ViewsDirective,
  ViewDirective,
  Day,
  TimelineViews,
  Month,
  Inject,
  Resize,
  DragAndDrop,
  ResourcesDirective,
  ResourceDirective,
} from "@syncfusion/ej2-react-schedule";

import { useDispatch, useSelector } from "react-redux";
import { scheduleData as data, scheduleData } from "../../data/dummy";
import roles, { decrement } from "../../Store/roles";
import CalenderHeader from "../../components/calender/header";
// End of Imports

// Main Function oF Schedule
export default function Labor({
  selected,
  setSelected,
  TemplateData,
  setTemplateData,
  RolesData,
  setRolesData,
  employeeData,
}) {
  const { Option } = Select;
  const tempateData = useSelector((state) => state.template);
  // All use States
  const [isMonth, setisMonth] = useState(false);
  const [isEmpty, setisEmpty] = useState(true);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isEmpModalVisible, setisEmpModalVisible] = useState(false);
  const [treeObj, setTreeObj] = useState();
  const [treeTObj, setTTreeObj] = useState();
  const [deleteIcon, setdeleteIcon] = useState(false);
  const [scheduleData, setscheduleData] = useState(data);
  const [currentViewDates, setcurrentViewDates] = useState([]);
  const [active, setactive] = useState(1);
  const [monthHeight, setmonthHeight] = useState("80px");

  const userData = useSelector((state) => state.roles);
  const [value, setvalue] = useState(1);
  const [currentSpecificEmp, setcurrentSpecificEmp] = useState([]);
  const [currentSelectedEvent, setcurrentSelectedEvent] = useState();
  const [date, setDate] = useState({
    year: moment().year(),
    month: moment().month(),
    date: moment().date(),
    day: moment().day(),
    eom: moment().endOf("month").date(),
  });

  const [scheduleObj, setScheduleObj] = useState();
  // End of use States
  // Month View Custom Template
  // useEffect(() => {
  //   window.addEventListener("wheel", (event) => {
  //     const delta = Math.sign(event.deltaY);
  //     if (
  //       scheduleObj.currentView === "TimelineDay" ||
  //       scheduleObj.currentView === "TimelineWeek"
  //     ) {
  //       if (delta > 0 && scheduleObj.timeScale.slotCount > 1) {
  //         scheduleObj.timeScale.slotCount -= 1;
  //         if (
  //           delta > 0 &&
  //           scheduleObj.timeScale.slotCount > 2 &&
  //           scheduleObj.timeScale.slotCount < 8
  //         ) {
  //           scheduleObj.timeScale.interval = 60;
  //         }
  //       } else if (delta < 0 && scheduleObj.timeScale.slotCount <= 15) {
  //         scheduleObj.timeScale.slotCount += 1;
  //         if (
  //           delta < 0 &&
  //           scheduleObj.timeScale.slotCount <= 15 &&
  //           scheduleObj.timeScale.slotCount >= 8
  //         )
  //           scheduleObj.timeScale.interval = 30;
  //       }
  //     }
  //   });

  //   return () => {
  //     window.removeEventListener("wheel", (event) => {
  //       const delta = Math.sign(event.deltaY);
  //       if (delta > 0 && scheduleObj.timeScale.slotCount > 1) {
  //         scheduleObj.timeScale.slotCount -= 1;
  //       } else if (delta < 0 && scheduleObj.timeScale.slotCount <= 15) {
  //         scheduleObj.timeScale.slotCount += 1;
  //       }
  //     });
  //   };
  // });
  // window.addEventListener("wheel", (event) => {
  //
  //   const delta = Math.sign(event.deltaY);
  //   if (delta > 0 && scheduleObj.timeScale.slotCount > 1) {
  //     scheduleObj.timeScale.slotCount -= 1;
  //   } else if (delta < 0 && scheduleObj.timeScale.slotCount <= 11) {
  //     scheduleObj.timeScale.slotCount += 1;
  //   }
  // });

  const monthTemplate = (event) => {
    const goBacKToDay = (event) => {
      event.stopPropagation();
      scheduleObj.currentView = "Day";
    };
    if (event.templateId === 0) {
      return (
        <div
          style={{ background: "#A7C7E7", height: monthHeight }}
          className="month-cell"
        >
          <p style={{ visibility: "hidden" }}>custom</p>
        </div>
      );
    } else {
      return (
        <div
          onDoubleClick={goBacKToDay}
          onClick={(event) => event.stopPropagation()}
          style={{ background: event.templateColor, height: monthHeight }}
          className="month-cell"
        >
          <p style={{ visibility: "hidden" }}>{event.templateName}</p>
        </div>
      );
    }
  };
  // Day view Custom Template
  const eventTemplate = (model) => {
    const handleInput = (event) => {
      event.stopPropagation();
      const specific = model.specificEmp.map((val) => val.Name);

      setcurrentSpecificEmp(specific);
      setcurrentSelectedEvent(model);
      setisEmpModalVisible(true);
    };

    const inputHandler = (event) => {
      let arrayCopy = JSON.parse(JSON.stringify(scheduleData));
      if (event.key === "Enter") {
        const data = arrayCopy.map((obj, index) => {
          if (obj.Id === model.Id) {
            scheduleObj.saveEvent({ ...obj, count: event.target.value });
            setvalue(event.target.value);
            return { ...obj, count: event.target.value };
          }

          // 👇️ otherwise return object as is
          scheduleObj.saveEvent(obj);
          return obj;
        });
        // setscheduleData((prevState) => {
        //   const newState = prevState.map((obj) => {
        //     if (obj.Id === model.Id) {
        //       setvalue(event.target.value);
        //       return { ...obj, count: event.target.value };
        //     }

        //     // 👇️ otherwise return object as is
        //     return obj;
        //   });

        //   return newState;
        // });
      }
    };
    return (
      <>
        <div className="event-tempalte-react" style={{ marginLeft: "4px" }}>
          <div className="template-wrap-title">
            <p
              style={{
                marginTop: "1em",
                marginBottom: "0.4em",
                marginLeft: "6px",
              }}
            >
              {model.Subject}
            </p>
            <input
              onKeyDown={inputHandler}
              onClick={(event) => event.stopPropagation()}
              className="input-template"
              type="number"
              defaultValue={model.count}
            />
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}></div>
          <div style={{ position: "absolute", top: "65%", left: "6px" }}>
            <PlusOutlined
              onClick={handleInput}
              className="react-event-button"
            />
          </div>
        </div>
      </>
    );
  };

  const change = (args) => {
    scheduleObj.selectedDate = args.value;
    scheduleObj.dataBind();
  };
  const showConfirm = () => {
    Modal.confirm({
      title: "Do you want to change these items for today?",
      icon: <ExclamationCircleOutlined />,
      content: "It will be a custom day",
      onOk() {
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

        //
        let arrayCopy = JSON.parse(JSON.stringify(scheduleData));
        const data = arrayCopy.map((obj, index) => {
          if (
            new Date(obj.StartTime) > new Date(startDate) &&
            new Date(obj.EndTime) < end
          ) {
            scheduleObj.saveEvent({
              ...obj,
              templateId: 0,
            });

            return {
              ...obj,
              templateId: 0,
            };
          }

          // 👇️ otherwise return object as is
          scheduleObj.saveEvent(obj);
          return obj;
        });
      },
      onCancel() {},
    });
  };
  const showDeleteConfirm = (id, filtered) => {
    Modal.confirm({
      title: "Are you sure delete this Template?",
      icon: <ExclamationCircleOutlined />,
      content: "This action can't be undone!",
      okText: "Yes",
      okType: "danger",
      cancelText: "No",
      onOk() {
        let i = 0;
        let arrayCopy = JSON.parse(JSON.stringify(scheduleData));

        const data = arrayCopy.map((val) => {
          if (val.templateId === id) {
            scheduleObj.deleteEvent(val.Id);
          } else {
            return "not deleted";
          }
        });

        // setscheduleData((prevState) =>
        //   prevState.filter((val) => {
        //     if (val.templateId !== id) {
        //       return val;
        //     }
        //   })
        // );
        setTemplateData([...filtered]);
      },
      onCancel() {},
    });
  };

  const deleteTemplate = (id) => {
    const filtered = TemplateData.filter((val) => val.Id !== id);
    showDeleteConfirm(id, filtered);
  };
  const dispatch = useDispatch();
  const [currentEdit, setcurrentEdit] = useState();
  const [iseditModel, setiseditModel] = useState(false);
  // Roles List Template
  const delRoleConfirm = (Id) => {
    Modal.confirm({
      title: "Are you sure delete this Role?",
      icon: <ExclamationCircleOutlined />,
      content: "All the roles associated with it will be deleted",
      okText: "Yes",
      okType: "danger",
      cancelText: "No",
      onOk() {
        let arrayCopy = JSON.parse(JSON.stringify(scheduleData));
        // setRolesData((prevState) => {
        //   prevState.filter((val) => val.Id !== Id);
        // });

        const data = arrayCopy.map((val) => {
          if (val.GroupId === Id) {
            scheduleObj.deleteEvent(val.Id);
          } else {
            return "not deleted";
          }
        });
        setRolesData(RolesData.filter((item) => item.Id !== Id));
      },
      onCancel() {},
    });
  };
  const treeTemplate = (props) => {
    const deleteRole = () => {
      delRoleConfirm(props.Id);
    };
    const editIt = () => {
      setcurrentEdit(props.Id);
      setiseditModel(true);
    };
    return (
      <div
        style={{
          backgroundColor: props.GroupColor,
        }}
        className="roles-template"
      >
        <span>{props.Name}</span>
        <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
          <EditOutlined onClick={editIt} />
          <DeleteOutlined onClick={deleteRole} />
        </div>
      </div>
    );
  };
  // template custom style sidebar
  const treeTTemplate = (props) => {
    return (
      <div>
        <div
          style={{
            width: "160px",
            borderRadius: "8px",
            backgroundColor: props.Color,
            color: "white",
            padding: "2px 8px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <span>{props.Name}</span>

            <span onClick={() => deleteTemplate(props.Id)}>
              <DeleteOutlined style={{ color: "#d11a2a" }} />
            </span>
          </div>
        </div>
      </div>
    );
  };
  // Function of drag start
  const onDragStart = (arg) => {
    arg.navigation.enable = false;
  };
  // Roles Data fields
  const fields = {
    dataSource: RolesData,
    id: "Id",
    text: "Name",
    child: "GroupText",
  };
  // Template data fields
  const Tfields = {
    dataSource: TemplateData,
    id: "Id",
    text: "Name",
    child: "GroupText",
  };
  // Function of Item drag of both template and roles
  const onItemDrag = (event) => {
    if (scheduleObj.isAdaptive) {
      let classElement = scheduleObj.element.querySelector(".e-device-hover");
      if (classElement) {
        classElement.classList.remove("e-device-hover");
      }
      if (event.event.target.classList.contains("e-work-cells")) {
        addClass([event.event.target], "e-device-hover");
      }
    }
    if (document.body.style.cursor === "not-allowed") {
      document.body.style.cursor = "";
    }
    if (event.name === "nodeDragging") {
      let dragElementIcon = document.querySelectorAll(
        ".e-drag-item.treeview-external-drag .e-icon-expandable"
      );
      for (let i = 0; i < dragElementIcon.length; i++) {
        dragElementIcon[i].style.display = "none";
      }
    }
  };
  // Function of Role item drag stop
  const onDragStop = (event) => {
    let treeElement = closest(event.target, ".e-treeview");
    let classElement = scheduleObj.element.querySelector(".e-device-hover");
    if (classElement) {
      classElement.classList.remove("e-device-hover");
    }
    if (!treeElement) {
      event.cancel = true;
      let scheduleElement = closest(event.target, ".e-content-wrap");
      if (scheduleElement) {
        if (event.target.classList.contains("e-work-cells")) {
          let cellData = scheduleObj.getCellDetails(event.target);
          let treeViewData = treeObj.fields.dataSource;
          const filtered = treeViewData.filter(
            (val) => val.Id === +event.draggedNodeData.id
          );
          let end = new Date(cellData.endTime);
          end.setHours(end.getHours() + 2);
          const now = cellData.startTime.toISOString();
          let eventData = {
            Subject: event.draggedNodeData.text,
            StartTime: cellData.startTime,
            Id: scheduleData.length + 1,
            templateId: 0,
            templateColor: "blue",
            templateName: "custom",
            EndTime: end,
            GroupId: filtered[0].GroupId,
            IsAllDay: cellData.isAllDay,
            count: 1,
            specificEmp: [],
          };
          scheduleObj.addEvent(eventData);
        }
      }
    }

    //m
  };
  // Function of going back from month to day
  const ChangeView = (e) => {
    e.stopPropagation();
    scheduleObj.selectedDate = new Date(
      parseInt(e.target.parentElement.getAttribute("data-date"))
    );
    const date = moment(scheduleObj.selectedDate);

    scheduleObj.currentView = "TimelineDay";
    setDate({
      year: date.year(),
      month: date.month(),
      date: date.date(),
      day: date.day(),
      eom: date.endOf("month").date(),
    });
    change = true;
  };
  // this function renders all the cell data when in view
  const renderCell = (args) => {
    if (
      args.element.classList.contains("e-work-cells") &&
      scheduleObj.currentView === "Month"
    ) {
      args.element.onclick = (event) => event.stopPropagation();
      args.element.children[0].onclick = (event) => event.stopPropagation();
      args.element.children[0].ondblclick = ChangeView;
      args.element.ondblclick = (event) => event.stopPropagation();
    }
    if (
      args.element.classList.contains("e-work-cells") &&
      scheduleObj.currentView === "TimelineWeek"
    ) {
      args.element.onclick = (event) => event.stopPropagation();
    }
    if (
      args.element.classList.contains("e-work-cells") &&
      scheduleObj.currentView === "TimelineDay"
    ) {
      args.element.onclick = (event) => event.stopPropagation();
    }
  };
  // warning model
  const warning = () => {
    Modal.warning({
      title: "You can't add Templete here ",
    });
  };
  // Function of When template drag stop
  const onDragTStop = (event) => {
    let treeElement = closest(event.target, ".e-treeview");
    let classElement = scheduleObj.element.querySelector(".e-device-hover");
    if (classElement) {
      classElement.classList.remove("e-device-hover");
    }
    let cellData = scheduleObj.getCellDetails(event.target);
    if (cellData) {
      let startDate = new Date(cellData.startTime);
      // end date of view

      let endDate = cellData.endTime;
      let end = new Date(endDate);

      end.setHours(end.getHours() + 24);
      // filtered Data of specific view
      const filteredDates = scheduleData.filter(
        (val) =>
          new Date(val.StartTime) > new Date(startDate) &&
          new Date(val.StartTime) < end
      );

      if (filteredDates.length > 0) {
        warning();
        event.cancel = true;
        return;
      }
    }
    if (!cellData) {
      warning();
      event.cancel = true;
    }
    if (!treeElement) {
      event.cancel = true;
      let scheduleElement = closest(event.target, ".e-content-wrap");

      if (scheduleElement) {
        if (event.target.classList.contains("e-work-cells")) {
          let cellData = scheduleObj.getCellDetails(event.target);

          let treeViewData = treeTObj.fields.dataSource;
          // end time data
          const startt = cellData.endTime.toISOString();
          const modifiedStart = startt.split("").splice(0, 10).join("");

          const filtered = treeViewData.filter(
            (val) => val.Id === +event.draggedNodeData.id
          );

          const req = filtered[0];
          const newArray = [...scheduleData];
          const newArr = req.templateTimes.map((val) => {
            function sameDay(d1, d2) {
              return (
                d1.getFullYear() === d2.getFullYear() &&
                d1.getMonth() === d2.getMonth() &&
                d1.getDate() === d2.getDate()
              );
            }

            const startDate = new Date(val.StartTime);
            const isoDate = startDate.toISOString();
            let start = isoDate.split("");
            start = start.splice(10).join("");
            start = modifiedStart + start;

            const standardFirstStartTime = new Date(cellData.startTime);
            const standardSecondStarTime = new Date(start);
            if (!sameDay(standardFirstStartTime, standardSecondStarTime)) {
              standardSecondStarTime.setDate(
                standardSecondStarTime.getDate() - 1
              );
            }

            const endDate = new Date(val.EndTime);

            if (sameDay(startDate, endDate)) {
              const isoDate2 = endDate.toISOString();
              let end = isoDate2.split("");
              end = end.splice(10).join("");
              end = modifiedStart + end;
              val.StartTime = standardSecondStarTime;
              val.EndTime = end;
              val.Id = uuid();
            } else {
              const isoDate2 = endDate.toISOString();
              let end = isoDate2.split("");
              end = end.splice(10).join("");

              end = modifiedStart + end;

              val.StartTime = standardSecondStarTime;
              val.EndTime = startt;
              val.Id = uuid();
            }
            const data = {
              ...val,
            };
            newArray.push(data);
            scheduleObj.addEvent(data);
            return data;
          });
          // setscheduleData(newArray);
        }
      }
    }
  };
  const [isWeek, setisWeek] = useState(false);
  // Function of when the view is changed
  const actionCompleted = (args) => {
    setmonthHeight("85px");
    if (
      args.requestType === "viewNavigate" ||
      args.requestType === "toolBarItemRendered"
    ) {
      let text = "Day View";
      let second = "Month View";
      let todayElement = scheduleObj.element.querySelector(
        ".e-schedule .e-schedule-toolbar .e-timeline-day .e-tbar-btn-text"
      );
      let week = scheduleObj.element.querySelector(
        ".e-schedule .e-schedule-toolbar .e-timeline-week .e-tbar-btn-text"
      );
      let monthElement = scheduleObj.element.querySelector(
        ".e-schedule .e-schedule-toolbar .e-month .e-tbar-btn-text"
      );
      todayElement.innerHTML = text;
      monthElement.innerHTML = second;
      week.innerHTML = "Week view";
    }

    let currentViewDates = scheduleObj.getCurrentViewDates();
    // start date of view
    let startDate = currentViewDates[0];
    let count = new Date(startDate);

    // end date of view
    let endDate = currentViewDates[currentViewDates.length - 1];
    let end = new Date(endDate);
    end.setHours(end.getHours() + 24);
    // if (scheduleObj.currentView === "Month") {
    //   // To calculate the time difference of two dates
    //   let Difference_In_Time = end.getTime() - count.getTime();

    //   // // To calculate the no. of days between two dates
    //   let Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
    //
    //   if (Difference_In_Days > 35) {
    //     setmonthHeight("80px");
    //   }
    //   if (Difference_In_Days === 35) {
    //     setmonthHeight("96px");
    //   }
    // }
    // filtered Data of specific view
    const filteredDates = scheduleData.filter(
      (val) =>
        new Date(val.StartTime) >= new Date(startDate) &&
        new Date(val.StartTime) <= end
    );
    setcurrentViewDates(filteredDates);
    const data = filteredDates.every((val) => val.templateId === 0);
    if (filteredDates.length > 0 && data) {
      setisEmpty(false);
    } else {
      setisEmpty(true);
    }
    if (scheduleObj.currentView === "Month") {
      setisMonth(true);
      setisWeek(false);
      setactive(2);
    }
    if (scheduleObj.currentView === "TimelineDay") {
      setisMonth(false);
      setisWeek(false);
      setactive(1);
    }
    if (scheduleObj.currentView === "TimelineWeek") {
      setisWeek(true);
      setisMonth(false);
    }
  };
  const [loading, setLoading] = useState(false);
  return (
    <Layout style={{ overflow: "hidden" }}>
      <Sider selected={selected} setSelected={setSelected} />
      <Container>
        {/* Edit Rolte */}
        <Modal
          visible={iseditModel}
          destroyOnClose
          onOk={() => {
            setiseditModel(!iseditModel);
          }}
          onCancel={() => {
            setiseditModel(!iseditModel);
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
            Edit Role
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
              setLoading(true);
              setRolesData(
                RolesData.map((obj) => {
                  if (obj.Id === currentEdit) {
                    return {
                      ...obj,
                      Name: values.name,
                    };
                  }

                  // 👇️ otherwise return object as is
                  return obj;
                })
              );

              let arrayCopy = JSON.parse(JSON.stringify(scheduleData));
              const data = arrayCopy.map((obj, index) => {
                if (obj.GroupId === currentEdit) {
                  scheduleObj.saveEvent({
                    ...obj,
                    Subject: values.name,
                  });

                  return {
                    ...obj,
                  };
                }

                // 👇️ otherwise return object as is
                scheduleObj.saveEvent(obj);
                return obj;
              });
              setLoading(false);
              setiseditModel(!iseditModel);
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
              wrapperCol={{
                offset: 9,
                span: 24,
              }}
            >
              <Button
                type="primary"
                htmlType="submit"
                style={{ width: "50%" }}
                loading={loading ? true : false}
              >
                {loading ? "Adding..." : "Add"}
              </Button>
              <Button
                onClick={() => setiseditModel(false)}
                type="secondry"
                style={{ width: "50%" }}
              >
                Cancel
              </Button>
            </Form.Item>
          </Form>
        </Modal>

        {/* Add Employee Modal */}
        <Modal
          visible={isEmpModalVisible}
          destroyOnClose
          onOk={() => {
            setisEmpModalVisible(!isEmpModalVisible);
          }}
          onCancel={() => {
            setisEmpModalVisible(!isEmpModalVisible);
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
            Add Associate(s)
          </Row>
          <Form
            name="basic"
            labelCol={{
              span: 24,
            }}
            wrapperCol={{
              span: 24,
            }}
            onFinish={({ name }) => {
              const specific = name.map((val) => {
                const data = {
                  Name: val,
                  Id: uuid(),
                };
                return data;
              });
              let arrayCopy = JSON.parse(JSON.stringify(scheduleData));
              const data = arrayCopy.map((obj, index) => {
                if (obj.Id === currentSelectedEvent.Id) {
                  scheduleObj.saveEvent({
                    ...obj,
                    specificEmp: specific,
                    count: specific.length,
                  });

                  return {
                    ...obj,
                    specificEmp: specific,
                    count: specific.length,
                  };
                }

                // 👇️ otherwise return object as is
                scheduleObj.saveEvent(obj);
                return obj;
              });
              // setscheduleData((prevState) => {
              //   const newState = prevState.map((obj) => {
              //     if (obj.Id === currentSelectedEvent.Id) {
              //       return {
              //         ...obj,
              //         specificEmp: specific,
              //         count: specific.length,
              //       };
              //     }

              //     // 👇️ otherwise return object as is
              //     return obj;
              //   });

              //   return newState;
              // });

              setisEmpModalVisible(!isEmpModalVisible);
            }}
            autoComplete="off"
          >
            <Form.Item
              name="name"
              rules={[
                {
                  required: true,
                  message: "Please add types",
                },
              ]}
            >
              <Select
                mode="tags"
                defaultValue={currentSpecificEmp}
                style={{
                  width: "100%",
                }}
                tokenSeparators={[","]}
              >
                {employeeData.map((val) => (
                  <Option key={val.Name}>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          gap: "2rem",
                          alignItems: "center",
                        }}
                      >
                        <img
                          style={{
                            width: "48px",
                            height: "48px",
                            borderRadius: "32px",
                          }}
                          src={val.img}
                          alt="img"
                        />
                        <h6 style={{ fontWeight: "bold", fontSize: "12px" }}>
                          {val.Name}
                        </h6>
                      </div>

                      <div
                        style={{
                          display: "flex",
                          gap: "2rem",
                          alignItems: "center",
                        }}
                      >
                        <h5 style={{ fontWeight: "bold", fontSize: "12px" }}>
                          $ {val.price}
                        </h5>
                        <Button className=".show">
                          <span>Add Associate</span>
                        </Button>
                        <div>
                          <Button>Remove</Button>
                        </div>
                      </div>
                    </div>
                  </Option>
                ))}
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
                onClick={() => setisEmpModalVisible(false)}
                type="secondry"
                style={{ width: "50%" }}
              >
                Cancel
              </Button>
            </Form.Item>
          </Form>
        </Modal>

        {/* Input Model */}
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
            ADD NEW TEMPLATE
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
              const mapped = filteredDates.map((val) => {
                const id = uuid();
                val.Id = id;
                val.templateId = TemplateData.length + 1;
                val.templateName = values.name;
                val.templateColor = colors[TemplateData.length % 6]?.bgColor;
                const data = {
                  ...val,
                };
                return data;
              });
              const data = {
                Name: values.name,
                Id: TemplateData.length + 1,
                Color: colors[TemplateData.length % 6]?.bgColor,
                templateTimes: mapped,
              };

              setTemplateData([...TemplateData, data]);

              // setRoles([...roles, { ...data }]);
              // dispatch(increment(data));
              setIsModalVisible(!isModalVisible);
            }}
            autoComplete="off"
          >
            <Form.Item
              label="Template Name"
              name="name"
              rules={[
                {
                  required: true,
                  message: "Please input template name",
                },
              ]}
            >
              <Input />
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
        <Header pageName="Scheduler" />
        <Content style={{ overFlow: "hidden" }}>
          <ContentContainer>
            <Row
              style={{
                width: "100%",
                backgroundColor: "#ecf3ff",
                border: "2px solid #ecedf0",
                borderRadius: "10px",
              }}
            >
              <Row style={{ width: "100%" }}>
                <Col style={{ margin: "auto" }} xs={23}>
                  <CalenderHeader
                    scheduleObj={scheduleObj}
                    isMonth={isMonth}
                    scheduleData={scheduleData}
                    active={active}
                    setactive={setactive}
                    date={date}
                    setDate={setDate}
                  />
                </Col>
                <Col xs={5}>
                  {isMonth ? (
                    <h4 style={{ textAlign: "center", marginTop: "1.5rem" }}>
                      Template(s)
                    </h4>
                  ) : (
                    <>
                      <Roles
                        RolesData={RolesData}
                        setRolesData={setRolesData}
                      />
                    </>
                  )}
                  {!isMonth && (
                    <>
                      <TreeViewComponent
                        allowDragAndDrop={true}
                        style={{ height: "500px" }}
                        fields={fields}
                        nodeDragStop={onDragStop}
                        nodeTemplate={treeTemplate}
                        nodeDragging={onItemDrag}
                        ref={(schedule) => setTreeObj(schedule)}
                      />
                      {!isMonth && currentViewDates.length > 0 && !isWeek && (
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <Button
                            style={{
                              marginBottom: "1rem",
                              width: "87%",
                              border: "1px dotted black",
                            }}
                            type="secondary"
                            onClick={() => setIsModalVisible(true)}
                          >
                            <PlusOutlined color="WHite" />
                            <span>Save Template</span>
                          </Button>

                          <Button
                            style={{
                              marginBottom: "1rem",
                              width: "87%",
                              border: "1px dotted black",
                            }}
                            type="secondary"
                            onClick={() => showConfirm()}
                          >
                            <PlusOutlined color="WHite" />
                            <span>Update Just Today</span>
                          </Button>
                        </div>
                      )}
                    </>
                  )}
                  {isMonth && (
                    <TreeViewComponent
                      allowDragAndDrop={true}
                      style={{ height: "500px" }}
                      fields={Tfields}
                      nodeDragStop={onDragTStop}
                      nodeDragging={onItemDrag}
                      nodeTemplate={treeTTemplate}
                      ref={(schedule) => setTTreeObj(schedule)}
                    />
                  )}
                </Col>

                <Col
                  xs={19}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "15px",
                  }}
                >
                  <ScheduleComponent
                    workDays={[1, 2, 3, 4, 5, 6, 7]}
                    height="650px"
                    cssClass="schedule-views-config"
                    width="100%"
                    actionComplete={actionCompleted}
                    ref={(schedule) => setScheduleObj(schedule)}
                    selectedDate={new Date().now}
                    renderCell={renderCell}
                    timeScale={{ enable: true, interval: 60, slotCount: 2 }}
                    eventSettings={{
                      dataSource: scheduleData,
                    }}
                    dragStart={onDragStart}
                  >
                    <ResourcesDirective>
                      <ResourceDirective
                        field="GroupId"
                        title="Role"
                        name="Role"
                        dataSource={RolesData}
                        textField="GroupText"
                        idField="GroupId"
                        colorField="GroupColor"
                      ></ResourceDirective>
                    </ResourcesDirective>
                    <ViewsDirective>
                      <ViewDirective
                        option="TimelineDay"
                        startHour="00:00"
                        endHour="00:00"
                        eventTemplate={(event) =>
                          eventTemplate(
                            event,
                            setisEmpModalVisible,
                            scheduleData,
                            setscheduleData
                          )
                        }
                      />
                      <ViewDirective
                        option="TimelineWeek"
                        eventTemplate={(event) =>
                          eventTemplate(
                            event,
                            setisEmpModalVisible,
                            scheduleData,
                            setscheduleData
                          )
                        }
                      />
                      <ViewDirective
                        eventTemplate={monthTemplate}
                        option="Month"
                      />
                    </ViewsDirective>
                    <Inject
                      services={[
                        Day,
                        TimelineViews,
                        Month,
                        Resize,
                        DragAndDrop,
                      ]}
                    />
                  </ScheduleComponent>
                </Col>
              </Row>
            </Row>
          </ContentContainer>
        </Content>
      </Container>
    </Layout>
  );
}
