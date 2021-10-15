import React from "react";
import "./NewExpenseForm.css";

function ExpenseForm() {
  return (
  <form>
      
      <div className="expense-form-controls">
        <div className="expense-form-control">
          <label>Title</label>
          <input type="text" placeholder="Title.."></input>
        </div>
        <div className="expense-form-control">
          <label>Amount</label>
          <input type="text" placeholder="0" min='0.01' step="0.01"></input>
        </div>
        <div className="expense-form-control">
          <label>Date</label>
          <input type="date" placeholder="Date.." min="2021-08-01" max="2022-12-31"></input>
        </div>
      </div>
    <div className="expense-form-actions">
        <button>Save ✔️</button>
    </div>
  </form>
  );
}

export default ExpenseForm;
