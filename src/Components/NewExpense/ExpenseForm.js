import React, { useState } from 'react';

import './ExpenseForm.css';

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

  return (
    <div>
      <h2 style={{fontFamily: 'Playfair Display', fontSize: '2.5em', color: '#05070a'}}>Track Your Spending</h2>
      <form onSubmit={submitHandler}>
        <div className='new-expense__controls'>
          <div className='new-expense__control'>
            <label style={{color:'#193f70'}}>Purchase</label>
            <input
              placeholder='What did you buy'
              type='text'
              value={enteredTitle}
              onChange={titleChangeHandler}
            />
          </div>
          <div className='new-expense__control'>
            <label style={{color:'#193f70'}}>Amount</label>
            <input
              placeholder='$ How much did you pay'
              type='number'
              min='0.01'
              step='0.01'
              value={enteredAmount}
              onChange={amountChangeHandler}
            />
          </div>
          <div className='new-expense__control'>
            <label style={{color:'#193f70'}}>Date</label>
            <input
              type='date'
              min='2019-01-01'
              max='2022-12-31'
              value={enteredDate}
              onChange={dateChangeHandler}
            />
          </div>
          <div className='new-expense__control'>
            <label style={{color:'#193f70'}}>Location</label>
            <input
              placeholder='Where did you purchase'
              type='text'
              value={enteredLocation}
              onChange={locationChangeHandler}
            />
          </div>
        </div>
        <div className='new-expense__actions'>
          <button type='submit'>Add Expenses</button>
          <button type='button' onClick={props.onCancel}>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default ExpenseForm;