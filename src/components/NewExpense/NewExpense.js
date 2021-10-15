import React from "react";
import './NewExpense.css';
import ExpenseForm from "./NewExpenseForm";

function NewExpense(){
    return <div className="newExpense-container">
        <ExpenseForm></ExpenseForm>
    </div>;
}

export default NewExpense;

