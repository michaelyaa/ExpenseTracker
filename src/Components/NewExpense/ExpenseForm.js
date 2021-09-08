import React, { useState } from 'react';

import styled from 'styled-components';
const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');
  const [enteredLocation, setEnteredLocation] = useState('');


  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const locationChangeHandler = (event) => {
    setEnteredLocation(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
      location: enteredLocation,
    };

    props.onSaveExpenseData(expenseData);
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
    setEnteredLocation('');
  };
  const Controls = styled.div`

  {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    margin-bottom: 1rem;
    text-align: left;
  }
  `
  const Control = styled.div`
  label {
    font-weight: bold;
    margin-bottom: 0.5rem;
    display: block;
    color: #7C83FD;
  }
  input {
    font: inherit;
    padding: 0.5rem;
    border-radius: 6px;
    border: 1px solid #ccc;
    width: 20rem;
    max-width: 100%;
    box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25);
  }
  h2 {
    fontFamily: Playfair Display
    fontSize: 2.5em
    color: #05070a
    text-align: center;
  }
  `;
  const Actions = styled.div`
  {
    text-align: right;
  }
  `;

  return (
    <div>
      <h2>Track Your Spending</h2>
      <form onSubmit={submitHandler}>
        <Controls>
          <Control>
            <label style={{ color: '#193f70' }}>Purchase</label>
            <input
              placeholder='What did you buy'
              type='text'
              value={enteredTitle}
              onChange={titleChangeHandler}
            />
          </Control>
          <Control>
            <label style={{ color: '#193f70' }}>Amount</label>
            <input
              placeholder='$ How much did you pay'
              type='number'
              min='0.01'
              step='0.01'
              value={enteredAmount}
              onChange={amountChangeHandler}
            />
          </Control>
          <Control>
            <label style={{ color: '#193f70' }}>Date</label>
            <input
              type='date'
              min='2019-01-01'
              max='2022-12-31'
              value={enteredDate}
              onChange={dateChangeHandler}
            />
          </Control>
          <Control>
            <label style={{ color: '#193f70' }}>Location</label>
            <input
              placeholder='Where did you purchase'
              type='text'
              value={enteredLocation}
              onChange={locationChangeHandler}
            />
          </Control>
        </Controls>
        <Actions>
          <button type='submit'>Add Expenses</button>
          <button type='button' onClick={props.onCancel}>Cancel</button>
        </Actions>
      </form>
    </div>
  );
};

export default ExpenseForm;