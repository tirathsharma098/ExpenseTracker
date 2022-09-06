import { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import Card from '../UI/Card';
import NewExpense from '../NewExpense/NewExpense';

const Expenses = (props) => {
    const [newExpense, setExpense] = useState(props.expenses);
    const newExpenseHandler = (newExpense) => {
        const newExpenseGot = {...newExpense};
        setExpense((prevExpense)=> {
            return [
                ...prevExpense,
                newExpenseGot
            ]
        });
        console.log(newExpenseGot);
    }
    return (
        <Card className="expenses">
            <NewExpense onNewExpenseSubmit={newExpenseHandler}/>
            {newExpense.map( (expense, i) =>
                <ExpenseItem
                    key={i}
                    date={expense.date}
                    amount={expense.amount}
                    title={expense.title}
                />)}
        </Card>
    );
}

export default Expenses;