import './Expenses.css'
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import {useState} from 'react';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState('2020');

    const filteredItems = props.items.filter(item => {
        return item.date.getFullYear().toString() === filteredYear;
    });

    function filterYearChangeHandler(selectedYear) {
        setFilteredYear(selectedYear);
    }

    // let expensesContent = <p>No expenses found.</p>
    //
    // if (filteredItems.length > 0) {
    //     expensesContent = filteredItems.map(item => (
    //         <ExpenseItem key={item.id} title={item.title} amount={item.amount} date={item.date}/>
    //     ));
    // }

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter selectedYear={filteredYear} onYearChange={filterYearChangeHandler}/>
                <ExpensesChart expenses={filteredItems}/>
                {/*{filteredItems.length === 0 && <p>No expenses found.</p>}*/}
                {/*{filteredItems.length > 0 &&*/}
                {/*(filteredItems.map(item => (*/}
                {/*    <ExpenseItem title={item.title}*/}
                {/*                 amount={item.amount}*/}
                {/*                 date={item.date}*/}
                {/*                 key={item.id}/>*/}
                {/*)))}*/}
                {/*{expensesContent}*/}
                <ExpensesList items={filteredItems}/>
            </Card>
        </div>
    );
}

export default Expenses;