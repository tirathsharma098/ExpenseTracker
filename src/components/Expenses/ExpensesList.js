import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = props => {
    const filteredExpenses = props.filteredExpenses;
    if(!filteredExpenses.length)
    return <p className="expenses-list__fallback">Expenses for Selected Year is Empty</p>
    
    return (
        <ul className="expenses-list">
        {filteredExpenses.map((expense, i) =>
            <ExpenseItem
            key={i}
            date={expense.date}
            amount={expense.amount}
            title={expense.title}
        /> )}
        </ul>
    )
}

export default ExpensesList;