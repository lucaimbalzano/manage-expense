import React from "react";
import "./Expense.css";
import Card from "../UI/Card.js";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpenseFilter/ExpensesFilter";
import { useState } from "react/cjs/react.development";
import ExpensesChart from "./ExpensesChart";

function Expense(props) {
  const [filteredYear, setFilteredYear] = useState("2021");

  const changeFilterHandler = (dateSelected) => {
    setFilteredYear(dateSelected);
  };

  const filteredExpenses = props.items.filter((expense) => {
    if(expense.date==null)
      return false;
    
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <Card className="expenses">
       <ExpensesChart expenses={filteredExpenses} />
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={changeFilterHandler}
      />
      {filteredExpenses.length === 0 ? (
        <p className="no-data">No Data found.</p>
      ) : (
        filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))
      )}
    </Card>
  );
}

export default Expense;

/*
###RENDERING DYNAMIC (INDIPENDENT OF THE LENGTH)
{props.items.map((expense) => (
  <ExpenseItem title={expense.title} amount={expense.amount} date={expense.date} />
  ))}
###RENDERING STATIC
<ExpenseItem
title={props.items[0].title}
amount={props.items[0].amount}
date={props.items[0].date}
/>
<ExpenseItem
title={props.items[1].title}
amount={props.items[1].amount}
date={props.items[1].date}
/>
<ExpenseItem
title={props.items[2].title}
amount={props.items[2].amount}
date={props.items[2].date}
/>

*/
