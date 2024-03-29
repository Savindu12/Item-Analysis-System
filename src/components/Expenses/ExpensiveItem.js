import React, {useState} from 'react';
import './ExpensiveItem.css';
import ExpenseDate from './ExpenseDate';

function ExpenseItem(props){

    // const [title, setTitle] = useState(props.title);

    // const clickHere = () => {
    //     setTitle("Title Changed!");
    // }

    return(
        <div>
            <div className='expense-item'>
               <ExpenseDate date = {props.date}/>
               <div className='expense-item__description'>
                    <h2>{props.title}</h2>
                    <div className='expense-item__price'>${props.amount}</div>
               </div>
            </div>
            {/* <button onClick={clickHere}>Change Title</button> */}
        </div>
    );
}
export default ExpenseItem;