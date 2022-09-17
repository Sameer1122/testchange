import React from "react";
import * as faker from "@faker-js/faker";

export const outboundsMock = {
  labels: [],
  datasets: [
    {
      label: "Outbounds",
      backgroundColor: ["#0979fc", "#c1c1c1"],
      hoverBackgroundColor: ["#0999fc", "#c1d1c1"],
      data: [24, 12],
    },
  ],
  legend: [
    { color: "#0979fc", text: "Trailers Loaded" },
    { color: "#c1c1c1", text: "Trailers Pending" },
  ],
};

export const shiftCapMock = {
  labels: [],
  datasets: [
    {
      label: "Shift Capacity",
      backgroundColor: ["#0979fc", "#c1c1c1"],
      hoverBackgroundColor: ["#0999fc", "#c1d1c1"],
      data: [24, 53],
    },
  ],
  legend: [
    { color: "#0979fc", text: "Hours Available" },
    { color: "#c1c1c1", text: "Hours Neeed" },
  ],
};

export const workRemainingMock = {
  data: {
    labels: [
      "Pick",
      "Replenishments",
      "Pellet picks",
      "Replenishments",
      "Loads",
    ],
    datasets: [
      {
        label: "Work remaining Against Goal",
        backgroundColor: "#343c4a",
        borderWidth: 2,
        data: [250, 350, 440, 0, 0],
      },
      {
        label: "Work remaining Against Goal",
        backgroundColor: "rgba(0, 0, 0, 0.05)",
        borderWidth: 2,
        data: [250, 150, 60, 500, 500],
      },
    ],
  },

  options: {
    barThickness: 50,
    barPercentage: 1,
    spanGaps: true,
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: 0,
        grid: {
          display: false,
        },
        stacked: true,
      },
      x: {
        grid: {
          display: false,
        },
        stacked: true,
      },
    },
  },
};

const demandsLabels = [
  "08:00",
  "10:00",
  "12:00",
  "14:00",
  "16:00",
  "18:00",
  "20:00",
  "22:00",
  "00:00",
  "02:00",
];

export const demandsMock = {
  data: {
    labels: demandsLabels,
    datasets: [
      {
        label: "Pick",
        data: demandsLabels.map(() =>
          faker.faker.datatype.number({ min: 15, max: 80 })
        ),
        fill: true,
        borderColor: "red",
        backgroundColor: "rgba(128,0,0,.05)",
        hidden: false,
      },
      {
        label: "Replenishment",
        data: demandsLabels.map(() =>
          faker.faker.datatype.number({ min: 15, max: 80 })
        ),
        fill: true,
        borderColor: "blue",
        backgroundColor: "rgba(0,0,128,.05)",
        hidden: false,
      },
      {
        label: "Pallet Pick",
        data: demandsLabels.map(() =>
          faker.faker.datatype.number({ min: 15, max: 80 })
        ),
        fill: true,
        borderColor: "pink",
        backgroundColor: "rgba(255,192,103,.05)",
        hidden: true,
      },
      {
        label: "Unload",
        data: demandsLabels.map(() =>
          faker.faker.datatype.number({ min: 15, max: 80 })
        ),
        fill: true,
        borderColor: "green",
        backgroundColor: "rgba(0,128,0,.05)",
        hidden: true,
      },
      {
        label: "Putaway",
        data: demandsLabels.map(() =>
          faker.faker.datatype.number({ min: 15, max: 80 })
        ),
        fill: true,
        borderColor: "#C55B61",
        backgroundColor: "rgba(183,50,57,.05)",
        hidden: true,
      },
      // {
      //   label: "Listpick",
      //   data: demandsLabels.map(() =>
      //     faker.faker.datatype.number({ min: 15, max: 80 })
      //   ),
      //   fill: true,
      //   borderColor: "black",
      //   backgroundColor: "rgba(0,0,0,.05)",
      //   hidden: true,
      // },
      // {
      //   label: "Load",
      //   data: demandsLabels.map(() =>
      //     faker.faker.datatype.number({ min: 15, max: 80 })
      //   ),
      //   fill: true,
      //   borderColor: "brown",
      //   backgroundColor: "rgba(165,42,42,.05)",
      //   hidden: true,
      // },
    ],
  },
  options: {
    elements: {
      line: {
        tension: 0.25,
      },
      point: {
        radius: 0,
      },
    },
    plugins: {
      legend: {
        display: true,
        position: "bottom",
        labels: {
          fontColor: "#323130",
          fontSize: 20,
        },
      },
    },
    scales: {
      y: {
        beginAtZero: 0,
      },
      x: {},
    },
  },
};

export const aggregateDataset = {
  labels: demandsLabels,
  datasets: [
    {
      label: "Aggregate",
      data: demandsLabels.map(() =>
        faker.faker.datatype.number({ min: 15, max: 80 })
      ),
      fill: true,
      borderColor: "aqua",
      backgroundColor: "rgba(0,255,255,.05)",
      hidden: false,
    },
  ],
};
