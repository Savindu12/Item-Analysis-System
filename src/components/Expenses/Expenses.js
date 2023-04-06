import '../Expenses/Expenses.css';
//import ExpenseItem from './ExpensiveItem';
import ExpensesFilter from '../NewExpenses/ExpenseFilter';
import ExpenseList from './ExpenseList';
import ExpenseChart from './ExpenseChart';
import { useState } from 'react';

function Expenses (props) {

    const [enterYear, setYear] = useState('2020');

    const dropDownChangeHandler = filterYear => {
        setYear(filterYear);
        // console.log(filterYear);
    };

    const filteredExpenses = props.items.filter(expenses => {
        return expenses.date.getFullYear().toString() === enterYear;
    });

    // let expenseControl = <p>There are No Expenses</p>;
    // if(filteredExpenses.length > 0)
    // {
    //     filteredExpenses.map((expenses) => (
    //         <ExpenseItem 
    //             key = {expenses.id}
    //             title = {expenses.title} 
    //             amount = {expenses.amount} 
    //             date = {expenses.date}
    //         />));
    // };

    return  (
        <div className='expenses'>
           <ExpensesFilter 
                    defaultYear = {enterYear} 
                    onChangeYear = {dropDownChangeHandler}
            />
            {/* {filteredExpenses.length == 0 ? (<p>There is No Expenses</p>) : filteredExpenses.map((expenses) => (
                <ExpenseItem 
                    key = {expenses.id}
                    title = {expenses.title} 
                    amount = {expenses.amount} 
                    date = {expenses.date}
                />
            ))} */}
            <ExpenseChart expenses = {filteredExpenses}/>
            <ExpenseList items = {filteredExpenses}/>
            
            {/* {expenseControl} */}

           {/* <ExpenseItem title={props.items[0].title} amount={props.items[0].amount} date={props.items[0].date}/>
           <ExpenseItem title={props.items[1].title} amount={props.items[1].amount} date={props.items[1].date}/>
           <ExpenseItem title={props.items[2].title} amount={props.items[2].amount} date={props.items[2].date}/>
           <ExpenseItem title={props.items[3].title} amount={props.items[3].amount} date={props.items[3].date}/> */}

        </div>
    );
}

export default Expenses;