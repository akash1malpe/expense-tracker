import React from "react";
import "./ExpenseDate.css";


const ExpenseDate = (props) => {
    // const month=["January","February","March","April","May","June","July","August","September","October","November","December"];
    
   
    const months =props.expenseData.date.toLocaleString("en-us",{month:"long"});
    const year = props.expenseData.date.getFullYear();
    const date = props.expenseData.date.getDate();

    
    return (
        <div className="fulldate">
            
                <div className="month">{months}</div>
                <div className="year">{year}</div>
                <div className="date">{date}</div>
           
        </div>
    )
}

export default ExpenseDate;