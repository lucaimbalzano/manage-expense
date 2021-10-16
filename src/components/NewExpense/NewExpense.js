import React from "react";
import { useState } from "react/cjs/react.development";
import "./NewExpense.css";
import ExpenseForm from "./NewExpenseForm";

function NewExpense(props) {
  //saving data and passing to parent by props
  const saveExpenseDataHandler = (submitExpenseOfChild) => {
    const expenseData = {
      ...submitExpenseOfChild,
      id: Math.random().toString(),
    };
    setIsEditing(false);
    props.onAddExpense(expenseData);
  };

  const [isEditing, setIsEditing] = useState(false);

  const switchToFormHandler = () => {
    setIsEditing(true);
  };

  const cancelButtonFormHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className="newExpense-container">
      {!isEditing && (
        <button className="btn-add-new-expense" onClick={switchToFormHandler}>
          Add New Expense
        </button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancelButtonFormHandler={cancelButtonFormHandler}
        />
      )}
    </div>
  );
}

export default NewExpense;
