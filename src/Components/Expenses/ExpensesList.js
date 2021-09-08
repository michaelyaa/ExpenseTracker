import React from 'react';

import ExpenseItem from './ExpenseItem';
import styled from 'styled-components'
const List = styled.ul`
{
  list-style: none;
  padding: 0;
}

.expenses-list__fallback {
  color: #eeebeb;
  text-align: center;
}
`;
const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return <h2 className='expenses-list__fallback'>FOUND NO EXPENSES!</h2>;
  }

  return (
    <List>
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          location={expense.location}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </List>
  );
};

export default ExpensesList;