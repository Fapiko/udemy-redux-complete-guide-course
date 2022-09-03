import {useState} from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate]     = useState('');
    const [enteredTitle, setEnteredTitle]   = useState('');
    const [addingExpense, setAddingExpense] = useState(false);

    // const [userInput, setUserInput] = useState({
    //     enteredAmount: '',
    //     enteredDate: '',
    //     enteredTitle: ''
    // });

    const amountChangedHandler = event => {
        // setUserInput({
        //     ...userInput,
        //     enteredAmount: event.target.value,
        // });
        setEnteredAmount(event.target.value);
    }

    const dateChangedHandler = event => {
        // setUserInput((prevState) => {
        //     return {
        //         ...prevState,
        //         date: event.target.value,
        //     };
        // });
        setEnteredDate(event.target.value);
    }

    const titleChangeHandler = event => {
        // setUserInput((prevState) => {
        //     return {
        //         ...userInput,
        //         enteredTitle: event.target.value,
        //     };
        // });
        setEnteredTitle(event.target.value);
    }

    const submitHandler = event => {
        event.preventDefault();

        const expenseData = {
            amount: +enteredAmount,
            date:   new Date(enteredDate),
            title:  enteredTitle,
        }

        props.onSaveExpenseData(expenseData);

        setEnteredTitle('');
        setEnteredDate('');
        setEnteredAmount('');
        setAddingExpense(false);
    }

    if (!addingExpense) {
        return (
            <button onClick={() => setAddingExpense(true)}>Add New Expense</button>
        )
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={enteredTitle} onChange={titleChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number"
                           min="0.01"
                           step="0.01"
                           value={enteredAmount}
                           onChange={amountChangedHandler}/>
                </div>
                <div className=" new-expense__control">
                    <label>Date</label>
                    <input type="date"
                           min="2019-01-01"
                           max="2022-12-31"
                           value={enteredDate}
                           onChange={dateChangedHandler}/>
                </div>
                <div className="new-expense__actions">
                    <button type="button" onClick={() => setAddingExpense(false)}>Cancel</button>
                    <button type="submit">Add Expense</button>
                </div>
            </div>
        </form>
    )
        ;
}

export default ExpenseForm;