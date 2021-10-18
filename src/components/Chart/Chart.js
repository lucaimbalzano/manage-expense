import React from 'react';

import ChartBar from './ChartBar';
import './Chart.css';

const Chart = (props) => {
  //take all amounts month of the expense and remap in array with only his values
  const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
  //take the max in base of the max value's expense
  const totalMaximum = Math.max(...dataPointValues);
  //return and passing key to identify the single chartBar
  return (
    <div className='chart'>
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
