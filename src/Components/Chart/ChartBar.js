import React from 'react';

import styled from 'styled-components'
const Bar = styled.div`
{
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.chart-bar__inner {
  height: 100%;
  width: 100%;
  border: 1px solid #b8c4ce;
  border-radius: 12px;
  background-color: #eff2f5;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}

.chart-bar__fill {
  background-color: #0c1b2e;
  width: 100%;
  transition: all 0.3s ease-out;
}

.chart-bar__label {
  font-weight: bold;
  font-size: 0.5rem;
  text-align: center;
  color: #0c1b2e;
}
`;
const ChartBar = (props) => {
  let barFillHeight = '0%';

  if (props.maxValue > 0) {
    barFillHeight = Math.round((props.value / props.maxValue) * 100) + '%';
  }

  return (
    <Bar>
      <div className='chart-bar__inner'>
        <div
          className='chart-bar__fill'
          style={{ height: barFillHeight }}
        ></div>
      </div>
      <div className='chart-bar__label'>{props.label}</div>
    </Bar>
  );
};

export default ChartBar;