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
import { setcarrier } from "../../Store/transportation";

const Courier = ({ id, data, legendVisiblity, height, bgColor }) => {
  const dispatch = useDispatch();
  const clickHandler = (event) => {
    if (event.point.x) {
      dispatch(setcarrier(event.point.x));
    }
  };
  return (
    <AccumulationChartComponent
      id={id}
      pointClick={clickHandler}
      legendSettings={{ visible: legendVisiblity, background: "white" }}
      height={height}
      background={bgColor}
      tooltip={{ enable: true }}
    >
      <Inject
        services={[PieSeries, AccumulationDataLabel, AccumulationTooltip]}
      />
      <AccumulationSeriesCollectionDirective>
        <AccumulationSeriesDirective
          name="Carrier"
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

export default Courier;
