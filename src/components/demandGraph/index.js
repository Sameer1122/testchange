import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

export default function DemandGraph({
  demandMockData,
  isAggregate,
  data,
  setData,
}) {
  const [colors, setColors] = useState([]);

  const onChange = (color) => {
    if (colors.findIndex((color_) => color_ === color) === -1) {
      if (colors.length < 5) {
        setColors([...colors, color]);
        setData({
          ...data,
          datasets: [
            ...data.datasets.map((item) => {
              return item.borderColor == color
                ? { ...item, hidden: false }
                : item;
            }),
          ],
        });
      }
    } else {
      setColors([...colors.filter((item) => item != color)]);
      setData({
        ...data,
        datasets: [
          ...data.datasets.map((item) => {
            return item.borderColor == color ? { ...item, hidden: true } : item;
          }),
        ],
      });
    }
  };

  const datasetLegend = () => {
    return isAggregate
      ? {
          display: true,
          position: "bottom",
          labels: {
            color: "aqua",
            fontSize: 20,
            boxWidth: 0,
          },
        }
      : {
          display: true,
          position: "bottom",
          labels: {
            generateLabels: (chart) => {
              return chart.data.datasets.map((dataset, index) => ({
                text: dataset.label,
                fontColor: dataset.borderColor,
                hidden: !chart.isDatasetVisible(index),
              }));
            },
            boxWidth: 0,
          },
          onClick: (e, f, l) => {
            onChange(f.fontColor);
          },
        };
  };

  return (
    <Line
      data={data}
      options={{
        ...demandMockData.options,
        plugins: {
          legend: datasetLegend(),
        },
        responsive: true,
      }}
      height={50}
    />
  );
}
