import React, { useState } from "react";
import "./NewExpenseForm.css";

const ExpenseForm = (props) => {
  //Using multiple STATEs
  const [inputInsertedTitle, setInputInsertedTitle] = useState("");
  const [inputInsertedAmount, setInputInsertedAmount] = useState("");
  const [inputInsertedDate, setInputInsertedDate] = useState("");
  //Using one STATE
  //    const [inputInserted, setInputInserted] = useState({
  //         titleInput,
  //         amountInput,
  //         dateInput
  //     });

  const setInputTitle = (event) => {
    //First Method
    setInputInsertedTitle(event.target.value);
    //Second Method
    // setInputInserted({
    //     ...inputInserted,
    //     titleInput: event.target.value
    // });
    //Third Method (Provide Secure update from React Features)
    // setInputInserted((oldState)=>{
    //     return {...oldState,titleInput: event.target.value}
    // });
  };

  const setInputAmount = (event) => {
    setInputInsertedAmount(event.target.value);
    // setInputInserted({
    //     ...inputInserted,
    //     amountInput: event.target.value
    // });
  };

  const setInputDate = (event) => {
    setInputInsertedDate(event.target.value);
    // setInputInserted({
    //     ...inputInserted,
    //     dateInput: event.target.value
    // });
  };

  const submitForm = (event) => {
    event.preventDefault(); //Prevent the reload of the page
    let submitExpense = {
      title: inputInsertedTitle,
      amount: inputInsertedAmount,
      date: new Date(inputInsertedDate)
    };

    //Passing data on parent
    props.onSaveExpenseData(submitExpense);

    //Clear values after stored inside submitExpense variable
    setInputInsertedTitle('');
    setInputInsertedDate('');
    setInputInsertedAmount('');

  };


  return (
    <form onSubmit={submitForm}>
      <div className="expense-form-controls">
        <div className="expense-form-control">
          <label>Title</label>
          <input
            type="text"
            placeholder="Title.."
            onChange={setInputTitle}
            value={inputInsertedTitle}
            />
        </div>
        <div className="expense-form-control">
          <label>Amount</label>
          <input
            type="number"
            placeholder="0"
            min="0.01"
            step="0.01"
            onChange={setInputAmount}
            value={inputInsertedAmount}
          />
        </div>
        <div className="expense-form-control">
          <label>Date</label>
          <input
            type="date"
            placeholder="Date.."
            min="2021-08-01"
            max="2022-12-31"
            onChange={setInputDate}
            value={inputInsertedDate}
          ></input>
        </div>
      </div>
      <div className="expense-form-actions">
        <button onClick={props.onSaveExpenseData} type="button" >Cancel</button>
        <button type="submit">Save ??????</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
