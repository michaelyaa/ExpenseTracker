import React, { useState } from 'react';

import ExpenseForm from './ExpenseForm';
import styled from 'styled-components'

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);


  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
  };


  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };
  const NewExpense = styled.div`
{
  background: #d3d3d3;
  opacity: 90%;
  padding: 1rem;
  margin: 2rem auto;
  width: 63rem;
  max-width: 95%;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25);
}

button {
  font: inherit;
  cursor: pointer;
  padding: 1rem 2rem;
  border: 1px solid #101013;
  background-color: #d3d3d3;
  color: #05070a;
  border-radius: 12px;
  margin-right: 1rem;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25);
}

 button:hover,
 button:active {
  background-color: #c5c5c5;
}

 button.alternative {
  color: #02183a;
  border-color: transparent;
  background-color: transparent;
}

 button.alternative:hover,
 button.alternative:active {
  background-color: #050202;
}

`
  return (
    <NewExpense>
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </NewExpense>
  );
};

export default NewExpense;