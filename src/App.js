import './App.css';
import ExpenseList from "./Component/expenseList";
import AddExpenseAndIncome from "./Component/AddExpenseAndIncome";
import FilterExpense from "./Component/FilterExpense";

function App() {
  return (
    <div>
      <p style={{fontSize:35,fontFamily:'bold',marginLeft:'40%'}}>Expense Traker</p>
      <AddExpenseAndIncome/>
      <FilterExpense/>
     {/* <ExpenseList /> */}
    </div>
  );
}

export default App;
