import React from "react";
import {
  AccumulationChartComponent,
  AccumulationSeriesCollectionDirective,
  AccumulationSeriesDirective,
  AccumulationLegend,
  PieSeries,
  AccumulationDataLabel,
  Inject,
  AccumulationTooltip,
} from "@syncfusion/ej2-react-charts";
import { useDispatch } from "react-redux";
import { setstatus } from "../../Store/work";

const StatusChart = ({ id, data, legendVisiblity, height, bgColor }) => {
  const dispatch = useDispatch();
  const clickHandler = (event) => {
    if (event.point.x) {
      console.log(event.point.x);
      dispatch(setstatus(event.point.x));
    }
  };
  return (
    <AccumulationChartComponent
      id={id}
      legendSettings={{ visible: legendVisiblity, background: "white" }}
      height={height}
      background={bgColor}
      pointClick={clickHandler}
      tooltip={{ enable: true }}
    >
      <Inject
        services={[PieSeries, AccumulationDataLabel, AccumulationTooltip]}
      />
      <AccumulationSeriesCollectionDirective>
        <AccumulationSeriesDirective
          name="Status"
          dataSource={data}
          xName="x"
          yName="y"
          innerRadius="40%"
          startAngle={0}
          endAngle={360}
          radius="70%"
          explode
          explodeOffset="10%"
          explodeIndex={2}
          dataLabel={{
            visible: true,
            name: "text",
            position: "Inside",

            font: {
              fontWeight: "600",
              color: "#fff",
            },
          }}
        />
      </AccumulationSeriesCollectionDirective>
    </AccumulationChartComponent>
  );
};

export default StatusChart;
