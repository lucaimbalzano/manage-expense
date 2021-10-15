import React,{useState} from "react";
import logo from "./logo.svg";
import Expense from "./components/Expenses/Expense";
import NewExpense from "./components/NewExpense/NewExpense";

const MOCK_DATA = [
  {
    id: "A001",
    title: "Grocieries",
    amount: 55.00,
    date: new Date(2021, 11, 14),
  },
  {
    id: "A002",
    title: "Car Insurance",
    amount: 255.00,
    date: new Date(2021, 9, 7),
  },
  {
    id: "A003",
    title: "Energy fee",
    amount: 155.99,
    date: new Date(2021, 10, 5),
  },
  {
    id: "A004",
    title: "Tablet",
    amount: 375.30,
    date: new Date(2020, 11, 14),
  },
  {
    id: "A005",
    title: "Tv Samsung 50''",
    amount: 969.99,
    date: new Date(2020, 12, 1),
  },
  {
    id: "A006",
    title: "MSI G65 Stealth",
    amount: 1600.10,
    date: new Date(2019, 12, 1),
  },
  {
    id: "A007",
    title: "LandRover Range Rover Evoque 2020",
    amount: 50000.10,
    date: new Date(2022, 8, 30),
  },
  {
    id: "A008",
    title: "Monitor Msi Curve 40''",
    amount: 590.90,
    date: new Date(2022, 3, 20),
  }
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
