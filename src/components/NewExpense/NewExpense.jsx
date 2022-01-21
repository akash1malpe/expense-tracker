import React from "react";
import { useState } from "react/cjs/react.development";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) =>{

    const getNewExpenseData = (data) =>{
        // alert("Hi this is from <NewExpense />");
        // console.log(data);
        props.readExpenseData(data);
    }

    const[showExpenseForm, setShowExpenseForm] = useState(false);

    // const ExpenseHandler = () => {
    //     setShowExpenseForm(true);
    // }

    return(

    <div className="new-expense">

        {!showExpenseForm && <button onClick={() => setShowExpenseForm(true) }>Add New Expense</button>}
        {showExpenseForm && <ExpenseForm sendData={getNewExpenseData} setShowExpenseForm={setShowExpenseForm} />}
        {/* <ExpenseForm sendData={getNewExpenseData} /> */}
        
        {/* <div className="new-expense_actions">
                    <button type="submit">Add Expense</button>
                </div> */}
                
    </div>
    )
}

export default NewExpense;