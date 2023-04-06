import React, { useState } from "react";
import "./NewExpense.css";
import ExpenceForm from "./ExpenseForm";
import ExpensesFilter from "../NewExpenses/ExpenseFilter";

const NewExpense = (props) => {
    
    const [isEditing, setIsEditing] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) =>{
        const expenseData = {
            ...enteredExpenseData,
             id: Math.random().toString()
        };
        // console.log(expenseData);
        props.onAddExpense (expenseData);
    };

    function onEditButtonHandler () {
        setIsEditing(false);
    }

    function onCancelButtonHandler () {
        setIsEditing(true);
    }

    return (
        <div className="new-expense">
            {isEditing ? <button type="submit" onClick={onEditButtonHandler}>Add New Expense</button> :
            <ExpenceForm onSaveExpenseData = {saveExpenseDataHandler} onClickButton = {onCancelButtonHandler}/>}
        </div>
    )
}

export default NewExpense;