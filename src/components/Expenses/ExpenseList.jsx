import React from "react";
import "./ExpenseList.css";
import ExpenseItem from './ExpenseItem.jsx';

const ExpenseList = (props) => {

    

    if(props.getFilteredYear.length ==  0){
        return <h1 className="expense-list_fallback">No Records Found</h1>
    }
           
    return(        
    <ul className="expense-list">
        {
         props.getFilteredYear.map((row, index) => {
                    return (
                        <ExpenseItem key={index} expenseData={row} />
                    )
                })
            }
            
    </ul>
    )
}


export default ExpenseList;