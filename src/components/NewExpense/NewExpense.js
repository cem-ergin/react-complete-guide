import { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

function NewExpense(props) {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    console.log(expenseData);
  };

  const [showForm, setShowForm] = useState(false);

  function changeFormState() {
    setShowForm(!showForm);
  }

  return (
    <div className="new-expense">
      {!showForm ? (
        <div className="new-expense__actions">
          <button onClick={changeFormState}>Add New Expense</button>
        </div>
      ) : (
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={changeFormState}/>
      )}
    </div>
  );
}

export default NewExpense;
