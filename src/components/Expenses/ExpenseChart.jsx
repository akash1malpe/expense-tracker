import React from "react";
import Chart from "../Chart/Chart";


const ExpenseChart = (props) => {
    // console.log(props.getFilteredYear);

    let chartDataPoints = [
        { label: "Jan", price: 0 },
        { label: "Feb", price: 0 },
        { label: "Mar", price: 0 },
        { label: "Apr", price: 0 },
        { label: "May", price: 0 },
        { label: "June", price: 0 },
        { label: "July", price: 0 },
        { label: "Aug", price: 0 },
        { label: "Sep", price: 0 },
        { label: "Oct", price: 0 },
        { label: "Nov", price: 0 },
        { label: "Dec", price: 0 }
    ];

    for(let record of props.getFilteredYear){

        let month = record.date.getMonth();
        // console.log(chartDataPoints[month].price);
        
        chartDataPoints[month].price += record.price;
        // console.log(chartDataPoints);  //to check the values are updated or not
    }

    return (
        <div>
            <Chart dataPoints={chartDataPoints} />
        </div>
    )
}

export default ExpenseChart;