

import './ExpenseForm.css'
import { useState } from 'react/cjs/react.production.min';
const ExpenseForm = () => {

    const [enteredTiltle, setEnteredTitle] = useState('');
    const [enteredDate, setEnteedDate] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    // const [userInput, setUserInput] = useState({
    //     enteredTiltle: '',
    //     enteredAmount: '',
    //     enteredDate: '',
    // });

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value)
        //     setUserInput({
        //         ...userInput,
        //         enteredTiltle: event.target.value,
        //     });
    };


    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value)
        //     setUserInput({
        //         ...userInput,
        //         enteredAmount: event.target.value,
        //     });
    };


    const dateChangeHandler = (event) => {
        setEnteedDate(event.target.value);
        //     setUserInput({
        //         ...userInput,
        //         enteredDate: event.target.value
        //     })
    };


    const submitHandler = (event) => {
        event.preventDefault();
        const expenseData = {
            title: enteredTiltle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        };
        console.log(expenseData);
        enteredAmount('');
        enteredDate('');
        enteredTiltle('');
    };

    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div lassName='new-expense__control'>
                    <label>Title</label>
                    <input type='text' value={enteredTiltle} onChange={titleChangeHandler} />
                </div>
                <div lassName='new-expense__control'>
                    <label>Amount</label>
                    <input type='num' min='0.01' step='0.01' value={enteredAmount} onChange={amountChangeHandler} />
                </div>
                <div lassName='new-expense__control'>
                    <label>Date</label>
                    <input type='date' min='2019-01-01' max='2022-12-31' value={enteredDate} onChange={dateChangeHandler} />
                </div>
            </div>
            <div className="new-expense__actions">
                <button>Add Expense</button>
            </div>
        </form>
    )
};

export default ExpenseForm;