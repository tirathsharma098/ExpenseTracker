import ExpenseItem from './ExpenseItem';
import './Expenses.css';
const Expenses = (props) => {
    return (
        <div className="expenses">
            {props.expenses.map(expense =>
                <ExpenseItem
                    date={expense.date}
                    amount={expense.amount}
                    title={expense.title}
                />)}
        </div>
    );
}

export default Expenses;