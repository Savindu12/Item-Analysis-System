import React from "react";
import '../Expenses/ExpenseList.css';
import ExpenseItem from "./ExpensiveItem";

function ExpenseList (props) {
    return (
        <div>
            {props.items.length == 0 && <p className="expenses-list__fallback">There are No Expenses</p>}
            <div className="expenses-list">
                {props.items.length > 0 && props.items.map((expenses) => (
                <ExpenseItem 
                    key = {expenses.id}
                    title = {expenses.title} 
                    amount = {expenses.amount} 
                    date = {expenses.date}
                />)) 
            }
            </div>
        </div>
       
    );
}

export default ExpenseList;