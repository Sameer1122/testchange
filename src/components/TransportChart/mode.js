import React from "react";
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  Legend,
  Category,
  Tooltip,
  ColumnSeries,
  DataLabel,
} from "@syncfusion/ej2-react-charts";

import { mode, barPrimaryXAxis, barPrimaryYAxis } from "../../data/dummy";
import { useDispatch } from "react-redux";
import { setmode } from "../../Store/transportation";

const Mode = ({ bgColor }) => {
  const dispatch = useDispatch();
  const clickHandler = (event) => {
    if (event.point.x) {
      dispatch(setmode(event.point.x));
    }
  };
  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <div className=" w-full">
        <ChartComponent
          pointClick={clickHandler}
          id="charts"
          primaryXAxis={barPrimaryXAxis}
          primaryYAxis={barPrimaryYAxis}
          chartArea={{ border: { width: 0 } }}
          height="55%"
          tooltip={{ enable: true }}
          background={bgColor}
          legendSettings={{ visible: false }}
        >
          <Inject
            services={[ColumnSeries, Legend, Tooltip, Category, DataLabel]}
          />
          <SeriesCollectionDirective>
            <SeriesDirective
              dataSource={mode}
              type="Column"
              xName="x"
              width={2}
              yName="y"
              name="Mode"
            />
          </SeriesCollectionDirective>
        </ChartComponent>
      </div>
    </div>
  );
};

export default Mode;
