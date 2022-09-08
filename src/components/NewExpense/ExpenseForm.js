import "./ExpenseForm.css";
import { useState } from "react";

const ExpenseForm = (props) => {
    const expenseSubmit = props.onNewExpenseSubmit;
    const [enteredTitle, setTitle] = useState('');
    const [enteredAmount, setAmount] = useState('');
    const [enteredDate, setDate] = useState('');
    const [showForm, setShowForm] = useState(false);
    const titleHandler = (e) => {
        setTitle(e.target.value);
    }
    const amountHandler = (e) => {
        setAmount(e.target.value);
    }
    const dateHandler = (e) => {
        setDate(e.target.value);
    }
    const submitHandler = (e) => {
        e.preventDefault();
        console.log('SHOW >> ', showForm);
        if(!showForm){
            setShowForm(true);
            return;
        }
        console.log('After If executed');
        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        }
        setAmount('');
        setTitle('');
        setDate('');
        expenseSubmit(expenseData);
        setShowForm(false)
    }
    const cancelInputHandler = e => {
        setShowForm(prevValue => {return !prevValue});
    }
    return (
        <form onSubmit={submitHandler}>
            {showForm ? 
            <div className="new-expense__control">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={enteredTitle} onChange={titleHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" value={enteredAmount} min="0.01" step="0.01" onChange={amountHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" value={enteredDate} min="2019-01-01" max="2023-12-31" onChange={dateHandler}/>
                </div>
            </div>
            : ""}
            <div className="new-expenses__actions">
                <button type="button" onClick={cancelInputHandler}>Cancel</button>
                <button type="submit">Submit</button>
            </div>
        </form>
    );
}

export default ExpenseForm;