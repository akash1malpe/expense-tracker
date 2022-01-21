
// import { useState } from 'react';
import { useState } from 'react';
import './App.css';
import Expenses from "./components/Expenses/Expenses";
import NewExpense from './components/NewExpense/NewExpense';

const dumyData = [
  {
    id:"exp1",
    date:new Date(2021,2,23),
    item:"New TV",
    price:799.49
  },
  {
    id:"exp2",
    date:new Date(2020,3,23),
    item:"Car Insurance",
    price:294.76
  },
  {
    id:"exp3",
    date:new Date(2019,8,23),
    item:"New Desk(wooden)",
    price:450.55
   }
   ,
  {
    id:"exp4",
    date:new Date(2021,9,23),
    item:"New Laptop",
    price:999.33
  }
];

function App() {
 
  const [expenseData, setExpenseData] = useState(dumyData); 
  
// console.log(expenseData);

const getNewExpenseData1 = (data) =>{
  // alert("Hi this is from <App />");
  console.log(data); 
//  setExpenseData( prev => [data, ...expenseData]);
 setExpenseData( prev => [data, ...prev]);
 
}

  return (
    
    <div>
      <NewExpense  readExpenseData={getNewExpenseData1}/>
      <Expenses expenseData={expenseData} />
      
    </div>
    
  );
  }

export default App;
