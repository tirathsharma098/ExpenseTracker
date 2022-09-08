import { useState } from 'react';
import './Expenses.css';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

const Expenses = (props) => {
    // const [newExpense, setExpense] = useState(props.expenses);
    // const newExpenseHandler = (newExpense) => {
    //     const newExpenseGot = {...newExpense};
    //     setExpense((prevExpense)=> {
    //         return [
    //             ...prevExpense,
    //             newExpenseGot
    //         ]
    //     });
    //     console.log(newExpenseGot);
    // }
    const expenses = props.expenses;
    const [filterYear, setFilterYear] = useState("2020");
    const filterYearHandler = selectedYear => {
        setFilterYear(selectedYear);
    }
    const filteredExpenses = expenses.filter(expense => {
        return expense.date.getFullYear() == filterYear && expense;
    })

    return (
            <Card className="expenses">
            <ExpensesChart expenses={filteredExpenses}/>
            <ExpensesFilter filterYear={filterYear} onYearFilter={filterYearHandler}/>
            <ExpensesList filteredExpenses={filteredExpenses}/>
            </Card>
    );
}

export default Expenses;