import React,{useState} from "react";
import logo from "./logo.svg";
import Expense from "./components/Expenses/Expense";
import NewExpense from "./components/NewExpense/NewExpense";

const MOCK_DATA = [
  {
    id: "A001",
    title: "Grocieries",
    amount: 55.3,
    date: new Date(2021, 11, 14),
  },
  {
    id: "A002",
    title: "Car Insurance",
    amount: 255.3,
    date: new Date(2021, 9, 7),
  },
  {
    id: "A003",
    title: "Energy fee",
    amount: 155.3,
    date: new Date(2021, 10, 5),
  },
];

const App = () => {
  const [expenses,setExpense] =  useState(MOCK_DATA);
  const newExpenseHandler = newExpenses => {
    setExpense((previusExppense) =>{
          return  [newExpenses, ...previusExppense];
    });
  };

  return (
    <div>
       <div className="expense-logo">
      <img src="expense-logo.png" />
    </div>
      <NewExpense onAddExpense={newExpenseHandler}/>
      <Expense items={expenses} />
    </div>
  );
};

export default App;
