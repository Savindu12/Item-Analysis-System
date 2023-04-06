//import { UserCircleIcon } from "@heroicons/react/20/solid";
import React, {useState}from "react";
import "../NewExpenses/ExpenseForm.css";

const ExpenceForm = (props) => {

    const [enterTitle, setTitle] = useState ("");
    const [enterAmount, setAmount] = useState("");
    const [enterDate, setDate] = useState("");

    // const [setClick, setClickChange] = useState(0);

    // function OnClickHandler () {
    //     setClickChange(counter => counter + 1);
    // }
    

    // const [showPassword, setShowPassword] = useState (false);
    // const [password, setPassword] = useState('');

    // const [enterInput, setInput] = useState (
    //     {
    //         enterTitle: '',
    //         enterAmount: '',
    //         enterDate: ''
    //     }
    // );

    const titleHandler = (event) => {
         setTitle(event.target.value);
        // setInput ({
        //     ...enterInput,
        //     enterTitle: event.target.value,
        // });
    };

    const amountHandler = (event) => {
         setAmount(event.target.value);
        // setInput ({
        //     ...enterInput,
        //     enterAmount: event.target.value,
        // });
    };

    const dateHandler = (event) => {
        setDate(event.target.value);
    //    setInput ({
    //         ...enterInput,
    //         enterDate: event.target.value,
    //     });

    };

    // const [MessageValidity, setMessageValidity] = useState ('');
    // const [AmountValidity, setAmountValidity] = useState ('');

    // function messageChangeHandler (event) {
    //    const value = event.target.value;
    //     if(value.trim().length < 3 ) {
    //         setMessageValidity('Invalid Title');
    //     }
    //     else{
    //         setMessageValidity('Valid Title');
    //     }
    // }

    // function AmountChangeHandler (event) {
    //    const value = event.target.value;
    //    if (value.trim().length < 3) {
    //     setAmountValidity('Invalid Amount');
    //    }
    //    else {
    //     setAmountValidity('Valid Amount');
    //    }
    // }

    // function showPasswordChange () {
    //     setShowPassword(!showPassword);
    // }

    // function setPasswordChange (event) {
    //     setPassword(event.target.value);
    // }

    const submitFormHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enterTitle,
            amount: +enterAmount,
            date: new Date(enterDate)
        }

        props.onSaveExpenseData(expenseData);

        setTitle('');
        setAmount('');
        setDate('');
    }

    return (
            <form onSubmit={submitFormHandler}>
                <div className="new-expense__controls">
                    <div className="new-expense__control">
                        <label>Title</label>
                        <input type= "text" onChange={titleHandler} value={enterTitle}></input>
                        {/* <input type= {showPassword? "text":"password"} onChange = {setPasswordChange} value={password}></input> */}
                        {/* <input type= "checkbox" checked = {showPassword} onChange={showPasswordChange}></input> */}
                        {/* <label>{MessageValidity}</label> */}
                    </div>
                </div>
                <div className="new-expense__controls">
                    <div className="new-expense__control">
                        <label>Amount</label>
                        <input type= "number" min= "0.01" step = "0.01" onChange={amountHandler} value={enterAmount}></input>
                        {/* <label>{AmountValidity}</label> */}
                    </div>
                </div>
                <div className="new-expense__controls">
                    <div className="new-expense__control">
                        <label>Date</label>
                        <input type= "date" min= "2020-03-20" max = "2024-03-25" onChange={dateHandler} value={enterDate}></input>
                    </div>
                </div>
                {/* <div>
                    <label>{setClick}</label>
                </div> */}
                <div className="new-expense__actions">
                    <button type="button" onClick={props.onClickButton}>Cancel</button>
                    <button type="Submit">Add Expense</button>
                    {/* <button onClick = {OnClickHandler}>Click here</button> */}
                </div>
            </form>
    )
}

export default ExpenceForm;