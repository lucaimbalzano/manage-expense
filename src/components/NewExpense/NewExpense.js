import React from "react";
import './NewExpense.css';
import ExpenseForm from "./NewExpenseForm";

function NewExpense(props){
    const saveExenseDataHandler = (submitExpenseOfChild) =>{
       const expenseData = {
           ...submitExpenseOfChild,
           id: Math.random().toString()
       }
       props.onAddExpense(expenseData);
    }
  

    return <div className="newExpense-container">
        <ExpenseForm  onSaveExpenseData={saveExenseDataHandler}/>
    </div>;
}

export default NewExpense;

