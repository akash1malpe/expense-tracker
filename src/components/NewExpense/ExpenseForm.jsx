import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
    const [title, setTitle] = useState("");
    const [amount, setAmount] = useState(0);
    const [date, setDate] = useState(new Date());

    const updateTitle = (e) => {
        // console.log(e.target);
        // console.log(e.target.value);
        setTitle(e.target.value);
    }

    const submit = (e) => {
        e.preventDefault(); //to stop the page from reloading

        // const month =date.toLocaleString("en-us",{month:"long"});
        // const year =date.getFullYear();
        // const date = date.getDate();

        const data = {
            id: Math.random().toString(),
            item: title,
            price: amount,
            date: new Date(date)
        }
        // console.log(data);
        props.sendData(data);  //calling getNewExpenseData function from
        setTitle("");
        setAmount("");
        setDate("");

        props.setShowExpenseForm(false);
    }

    return (
       
            <form onSubmit={submit}>
                <div className="new-expense_controls">

                    <div className="new-expense_control">
                        <label>Title</label>
                        <input type="text" onChange={updateTitle} value={title} />
                    </div>
                    <div className="new-expense_control">
                        <label >Amount</label>
                        <input type="number" onChange={(e) => setAmount(e.target.value)} value={amount} />
                    </div>
                    <div className="new-expense_control">
                        <label >Date</label>
                        <input type="date"  onChange={(e) => setDate(e.target.value)} value={date} />
                    </div>
                
                </div>
                <div className="new-expense_actions">
                <button type="button" onClick={() => props.setShowExpenseForm(false)}>Cancel</button>
                <button type="submit" >Add Expense</button>
            </div>
            </form>

           
        
    );
}

export default ExpenseForm;