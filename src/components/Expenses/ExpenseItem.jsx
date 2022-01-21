// import React, { useState } from "react";  //for usestate
import React from 'react';
import './ExpenseItem.css';
import ExpenseDate from "./ExpenseDate";
import Card from "../card/Card";


const ExpenseItem = (props) =>{
    
    // const [itemDesc, setItemDesc]=useState(props.expenseData.item);

    // let itemDesc = props.expenseData.item;
    // const itemUpdate = () =>{
    //     // console.log("updated");
    //     // itemDesc = "updated";
    //     // console.log(itemDesc);
    //      setItemDesc("updated");
        
    // }
    return(
        <Card className="container">
     <div>
         <ExpenseDate month={props.month} expenseData={props.expenseData} />
     </div>

      <div className="item">{props.expenseData.item}</div>

      <div className="price">
          $ {props.expenseData.price}
          </div>
      {/* <div className="button">
        <button onClick={itemUpdate}>click me</button>
      </div> */}
      </Card>
    );
}

export default ExpenseItem;