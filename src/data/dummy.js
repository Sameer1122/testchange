import React from "react";

export const scheduleData = [
  // {
  //   count: 1,
  //   templateId: 0,
  //   templateColor: "blue",
  //   templateName: "custom",
  //   Id: 1,
  //   GroupId: 1,
  //   Subject: "Explosion of Betelgeuse Star",
  //   Location: "Space Center USA",
  //   StartTime: "2021-01-10T04:00:00.000Z",
  //   EndTime: "2021-01-10T05:30:00.000Z",
  //   CategoryColor: "#1aaa55",
  //   specificEmp: [
  //     {
  //       Id: 1,
  //       Name: "Erica Smith",
  //     },
  //     {
  //       Id: 2,
  //       Name: "Ellise Wheeler",
  //     },
  //   ],
  // },
  // {
  //   count: 1,
  //   Id: 2,
  //   templateId: 0,
  //   templateColor: "blue",
  //   templateName: "custom",
  //   GroupId: 2,
  //   Subject: "Thule Air Crash Report",
  //   Location: "Newyork City",
  //   StartTime: "2021-01-10T06:00:00.000Z",
  //   EndTime: "2021-01-10T08:00:00.000Z",
  //   CategoryColor: "#357cd2",
  //   specificEmp: [
  //     {
  //       Id: 1,
  //       Name: "Erica Smith",
  //     },
  //   ],
  // },
  // {
  //   count: 1,
  //   Id: 3,
  //   templateId: 0,
  //   templateColor: "blue",
  //   templateName: "custom",
  //   GroupId: 2,
  //   Subject: "Sameer",
  //   Location: "Newyork City",
  //   StartTime: "2021-01-11T06:00:00.000Z",
  //   EndTime: "2021-01-11T08:00:00.000Z",
  //   CategoryColor: "#357cd2",
  //   specificEmp: [
  //     {
  //       Id: 1,
  //       Name: "Erica Smith",
  //     },
  //   ],
  // },
];
export const TemplateData = [
  // {
  //   Name: "Friday",
  //   Id: 1,
  //   Color: "#1aaa55",
  //   templateTimes: [
  //     {
  //       count: 1,
  //       Id: 3,
  //       templateId: 1,
  //       templateColor: "#1aaa55",
  //       templateName: "Friday",
  //       Subject: "Explosion of Betelgeuse Star",
  //       Location: "Space Center USA",
  //       GroupId: 1,
  //       StartTime: "2021-01-10T04:00:00.000Z",
  //       EndTime: "2021-01-10T05:30:00.000Z",
  //       CategoryColor: "#1aaa55",
  //       specificEmp: [
  //         {
  //           Id: 1,
  //           Name: "Erica Smith",
  //         },
  //       ],
  //     },
  //     {
  //       count: 1,
  //       Id: 4,
  //       templateId: 1,
  //       templateColor: "#1aaa55",
  //       templateName: "Friday",
  //       Subject: "Thule Air Crash Report",
  //       Location: "Newyork City",
  //       GroupId: 2,
  //       StartTime: "2021-01-10T06:30:00.000Z",
  //       EndTime: "2021-01-10T08:30:00.000Z",
  //       CategoryColor: "#357cd2",
  //       specificEmp: [
  //         {
  //           Id: 1,
  //           Name: "Erica Smith",
  //         },
  //       ],
  //     },
  //   ],
  // },
];
export const employeeData = [
  {
    Id: 1,
    Email: "test@test.com",
    FirstName: "Erica",
    LastName: "Smith",
    LoadedCost: "500",
    LoadedHour: "3000",
    Name: "Erica Smith",
    price: 50,
    img: "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
  },
  {
    Id: 2,
    Email: "test@test.com",
    FirstName: "Ellise",
    LastName: "Wheeler",
    LoadedCost: "500",
    LoadedHour: "3000",
    Name: "Ellise Wheeler",
    price: 45,
    img: "https://previews.123rf.com/images/dragonimages/dragonimages1611/dragonimages161100413/66967368-portrait-of-a-pretty-young-female-employee.jpg",
  },
  {
    Id: 3,
    Email: "test@test.com",
    FirstName: "Edward",
    LastName: "Kenway",
    LoadedCost: "500",
    LoadedHour: "3000",
    Name: "Edward Kenyway",
    price: 40,
    img: "https://www.davd.photo/wp-content/uploads/2019/03/rocco-roxie-employee-headshots-4.jpg",
  },
];

export const pieChartData = [
  { x: "Pallet Pick", y: 18, text: "18%" },
  { x: "Case Pick", y: 8, text: "8%" },
  { x: "Recieving", y: 15, text: "15%" },
  { x: "Putaway", y: 11, text: "11%" },
  { x: "Unloading", y: 8, text: "8%" },
  { x: "Worker", y: 14, text: "14%" },
  { x: "Guard", y: 10, text: "10%" },
  { x: "Other", y: 6, text: "6%" },
  { x: "Manager", y: 10, text: "10%" },
];
export const Carier = [
  { x: "Schneider ", y: 18, text: "30%" },
  { x: "DHL", y: 8, text: "23%" },
  { x: "FedEX", y: 15, text: "35%" },
  { x: "UPS", y: 11, text: "17%" },
];
export const pieStatusData = [
  { x: "Completed", y: 36, text: "36%" },
  { x: "Open", y: 64, text: "64%" },
];
export const InboundOutbound = [
  { x: "Inbound", y: 36, text: "66%" },
  { x: "Outbound", y: 64, text: "34%" },
];
export const barChartData = [
  [
    { x: "USA", y: 46 },
    { x: "GBR", y: 27 },
    { x: "CHN", y: 26 },
  ],
  [
    { x: "USA", y: 37 },
    { x: "GBR", y: 23 },
    { x: "CHN", y: 18 },
  ],
  [
    { x: "USA", y: 38 },
    { x: "GBR", y: 17 },
    { x: "CHN", y: 26 },
  ],
];
export const barCustomSeries = [
  {
    dataSource: [{ x: "pallet", y: 80 }],
    xName: "x",
    yName: "y",
    name: "Pallet Pick",
    type: "Column",
    marker: {
      dataLabel: {
        visible: true,
        position: "Top",
        font: { fontWeight: "600", color: "#ffffff" },
      },
    },
  },
  {
    dataSource: [{ x: "unloader", y: 50 }],
    xName: "x",
    yName: "y",
    name: "Unloader",
    type: "Column",
    marker: {
      dataLabel: {
        visible: true,
        position: "Top",
        font: { fontWeight: "600", color: "#ffffff" },
      },
    },
  },
  {
    dataSource: [{ x: "Replishment", y: 30 }],
    xName: "x",
    yName: "y",
    name: "Replishment",
    type: "Column",
    marker: {
      dataLabel: {
        visible: true,
        position: "Top",
        font: { fontWeight: "600", color: "#ffffff" },
      },
    },
  },
];
export const barPrimaryXAxis = {
  valueType: "Category",
  interval: 1,
  majorGridLines: { width: 0.5 },
};
export const barPrimaryYAxis = {
  majorGridLines: { width: 0.5 },
  majorTickLines: { width: 0.5 },
  lineStyle: { width: 1 },
  minimum: 0,
  maximum: 100,
  interval: 10,
  labelStyle: { color: "black" },
};

export let data1 = [
  { x: "High", y: 50 },
  { x: "Medium", y: 33 },

  { x: "Low", y: 27, text: "18%" },
];
export let mode = [
  { x: "TL", y: 50, text: "50%" },
  { x: "LTL", y: 33, text: "33%" },

  { x: "Parcel", y: 27, text: "27%" },
];
