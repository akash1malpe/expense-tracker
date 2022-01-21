import React, {useState} from "react";
import "./Expenses.css";
import Card from "../card/Card.jsx";
import ExpenseFilter from "./ExpenseFilter.jsx";
import ExpenseList from "./ExpenseList.jsx";
import ExpenseChart from "./ExpenseChart";
// import { useState } from 'react/cjs/react.development';

const Expenses= (props) =>{
    const [FilteredYear, setFilteredYear]=useState("2020");

    const updateFilterYear = (year) => {
        console.log("inside Expenses:");
        console.log(year);
        setFilteredYear(year);
    }

    let getFilteredYear = props.expenseData.filter((exp) =>{
        // console.log(exp.date.getFullYear());
        return exp.date.getFullYear().toString()===FilteredYear.toString();
    });
    // console.log(getFilteredYear);

    //assign jsx code to a variable
    
     return(
        <Card className="expenses">
            <ExpenseFilter updateFilterYear={updateFilterYear} FilteredYear={FilteredYear} />
      {/* <ExpenseItem expenseData={props.expenseData[0]}  />
      <ExpenseItem expenseData={props.expenseData[1]}  />
      <ExpenseItem expenseData={props.expenseData[2]} />
      <ExpenseItem expenseData={props.expenseData[3]} />
      <ExpenseItem expenseData={props.expenseData[4]} /> */}


   
                <ExpenseChart getFilteredYear={getFilteredYear} />
           
           <ExpenseList getFilteredYear= {getFilteredYear} />
        </Card>
    
     );
    }

export default Expenses;