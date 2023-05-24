import React,{useState} from 'react';

import './NewExpense.css';

import ExpenseForm from './ExpenseForm';
const NewExpense = (props) =>{
    const [isEdition,setIsEdition]=useState(false);

   const saveExpenseDataHandler = (enteredExpenseData) =>{
      const expenseData ={
        ...enteredExpenseData,
        id:Math.random().toString()
      };
      props.onAddNewExpense(expenseData);
      setIsEdition(false);
   };

   const startEditingHandler = () => {
      setIsEdition(true);
   };

   const stopEditingHandler =() =>{
      setIsEdition(false);
   };

    return (
      <div className="new-expense">
      {!isEdition && <button onClick={startEditingHandler}>Add New Expense</button>}
      {isEdition && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler} />}
      </div>
    );
};


export default NewExpense;