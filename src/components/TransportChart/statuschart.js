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
import { setbound } from "../../Store/transportation";

const InboundChart = ({ id, data, legendVisiblity, height, bgColor }) => {
  const dispatch = useDispatch();
  const clickhandler = (event) => {
    if (event.point.x) {
      dispatch(setbound(event.point.x));
    }
  };
  return (
    <AccumulationChartComponent
      id={id}
      legendSettings={{ visible: legendVisiblity, background: "white" }}
      height={height}
      pointClick={clickhandler}
      background={bgColor}
      tooltip={{ enable: true }}
    >
      <Inject
        services={[PieSeries, AccumulationDataLabel, AccumulationTooltip]}
      />
      <AccumulationSeriesCollectionDirective>
        <AccumulationSeriesDirective
          name="Inbound/Outbound"
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

export default InboundChart;
