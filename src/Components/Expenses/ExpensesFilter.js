import React from 'react';


import styled from 'styled-components'
const Filter = styled.div`
{
  color: #05070a;
  padding: 0 1rem;
}
`;
const Control = styled.div`
{
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  margin: 1rem 0;
  color: #05070a;
}
select {
  font: inherit;
  padding: 0.5rem 3rem;
  font-weight: bold;
  border-radius: 6px;
  color: #05070a;
  background-color: #d3d3d3;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25);
}
label {
  font-weight: bold;
  margin-bottom: 0.5rem;
  color: #05070a;
}
`;
const ExpensesFilter = (props) => {
  const dropdownChangeHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };

  return (
    <Filter>
      <Control>
        <label style={{fontFamily: 'Playfair Display', fontSize: '1.5em', color: '#05070a'}}>Filter By Year</label>
        <select value={props.selected} onChange={dropdownChangeHandler}>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </Control>
    </Filter>
  );
};

export default ExpensesFilter;