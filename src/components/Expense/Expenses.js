import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import Card from '../../UI/Card';
import ExpensesFilter from './ExpensesFilter';

function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState('2021');

    const filterChangeHundler = (selectedYear) => {
        console.log(selectedYear);
        setFilteredYear(selectedYear);
    }

    const filteredExpenses = props.expenses.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    })
    console.log(filteredExpenses)

    return <Card className="expenses">
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHundler} />
        {
            filteredExpenses.map((el) => {
                return <ExpenseItem
                    title={el.title}
                    amount={el.amount}
                    date={el.date}
                    key={el.id}
                />
            })
        }
    </Card>
}

export default Expenses;