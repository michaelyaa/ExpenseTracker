
import React from 'react';

import ChartBar from './ChartBar';
import './Chart.css';
import styled from 'styled-components'
const Chart = styled.div`
{
  padding: 1rem;
  border-radius: 12px;
  background-color: #7C83FD;
  text-align: center;
  display: flex;
  justify-content: space-around;
  height: 10rem;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25);
}`;
const Chart = (props) => {
  const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
  const totalMaximum = Math.max(...dataPointValues);

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