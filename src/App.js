import { useState} from 'react';
import './App.css';
import Expenses from './Components/Expenses/Expenses';
import NewExpense from './Components/NewExpense/NewExpense';
// import PreLoader from './Components/PreLoader/PreLoader';

const SOME_EXPENSES = [
  {
    id: 'e1',
    title: 'Auto Insurance',
    amount: 294.67,
    date: new Date(2021, 12, 26),
    location: 'CrossWay FIS'
  },

  {
    id: 'e10',
    title: 'Black Coffee',
    amount: 6.12,
    date: new Date(2021, 6, 24),
    location: 'Surf Cafè'
  },
  {
    id: 'e1',
    title: 'Phone Bill',
    amount: 152.38,
    date: new Date(2021, 2, 26),
    location: 'T-Mobile'
  },

  {
    id: 'e2',
    title: 'Black Coffee',
    amount: 6.12,
    date: new Date(2020, 6, 24),
    location: 'Surf Cafè'
  },
  {
    id: 'e3',
    title: 'Essential Oil',
    amount: 94.12,
    date: new Date(2021, 9, 17),
    location: 'CVS'
  },
  {
    id: 'e3',
    title: 'Phone Bill',
    amount: 146.23,
    date: new Date(2020, 7, 28),
    location: 'AT&T'
  },
  { id: 'e4',
  title: 'LG TV',
  amount: 799.49,
  date: new Date(2020, 2, 16),
  location: 'Best Buy'
},
{
  id: 'e5',
  title: 'Tooth Brush',
  amount: 9.21,
  date: new Date(2020, 3, 9),
  location: 'CVS'
},

  {
    id: 'e6',
    title: 'New Desk (Wooden)',
    amount: 449.99,
    date: new Date(2021, 11, 3),
    location: 'IKEA'
  },
  {
    id: 'e7',
    title: 'Watermelon',
    amount: 94.12,
    date: new Date(2021, 8, 14),
    location: 'Walmart'
  },
  {
    id: 'e8',
    title: 'Birthday Cake',
    amount: 41.28,
    date: new Date(2020, 8, 16),
    location: 'Sweets & Suger'
  },
  {
    id: 'e11',
    title: 'Beats Headphones',
    amount: 268.32,
    date: new Date(2020, 7, 12),
    location: 'Apple'
  }
];

const App = () => {
  const [expenses, setExpenses] = useState(SOME_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
  return (
    <div>
        {/* <PreLoader/> */}
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;