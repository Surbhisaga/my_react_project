import logo from './logo.svg';
import './App.css';
import ExpenseList from "./Component/expenseList";

function App() {
  return (
    <div>
      <p style={{fontSize:35,fontFamily:'bold',marginLeft:'35%'}}>Expense Traker</p>
     <ExpenseList />
    </div>
  );
}

export default App;
