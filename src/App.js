import React , {useState} from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpenses/NewExpense';
import UserLogin from './DemoLogin/LoginUI/UserLogin';
import ExpensesFilter from './components/NewExpenses/ExpenseFilter';

const INITAL_EXPENSES = [
  {
    id: 'e1',
    title: 'House Loans',
    amount: 41000,
    date: new Date(2021, 10, 27),
  },

  {
    id: 'e2',
    title: 'Vehicle Loans',
    amount: 41000,
    date: new Date(2020, 10, 27),
  },

  {
    id: 'e3',
    title: 'Property Loans',
    amount: 41000,
    date: new Date(2020, 10, 27),
  },

  {
    id: 'e4',
    title: 'Educational Loans',
    amount: 41000,
    date: new Date(2021, 10, 27),
  },
];

function App() {

  const [expenses, setExpenses] = useState(INITAL_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense = {addExpenseHandler}/>
      <Expenses items = {expenses}/>
      {/* <UserLogin/> */}
    </div>

  );
}

export default App;
