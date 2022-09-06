import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import Card from '../UI/Card';
const Expenses = (props) => {
    return (
        <Card className="expenses">
            {props.expenses.map(expense =>
                <ExpenseItem
                    date={expense.date}
                    amount={expense.amount}
                    title={expense.title}
                />)}
        </Card>
    );
}

export default Expenses;