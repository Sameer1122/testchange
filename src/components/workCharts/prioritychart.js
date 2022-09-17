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

import { data1, barPrimaryXAxis, barPrimaryYAxis } from "../../data/dummy";
import { useDispatch } from "react-redux";
import { setpriority } from "../../Store/work";

const Bar = ({ bgColor }) => {
  const dispatch = useDispatch();
  const clickHandler = (event) => {
    if (event.target.ariaLabel) {
      const data = event.target.ariaLabel.split("");
      const neww = [];
      for (const el of data) {
        if (el === ":") break;
        neww.push(el);
      }
      const newData = neww.join("");
      dispatch(setpriority(newData));
    }
  };
  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <div className=" w-full">
        <ChartComponent
          id="charts"
          primaryXAxis={barPrimaryXAxis}
          primaryYAxis={barPrimaryYAxis}
          chartArea={{ border: { width: 0 } }}
          onClick={clickHandler}
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
              dataSource={data1}
              type="Column"
              xName="x"
              width={2}
              yName="y"
              name="Priority"
            />
          </SeriesCollectionDirective>
        </ChartComponent>
      </div>
    </div>
  );
};

export default Bar;
