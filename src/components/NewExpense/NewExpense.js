import './NewExpense.css'
import ExpenseForm from './ExpenseForm';
import { useState } from 'react';


const NewExpense = (props) => {
  const onSaveExpensedDataHandler = (enteredExpensedData) => {
    const expenseData = {
      ...enteredExpensedData,
      id : Math.random().toString()
    }
    props.onAddExpense(expenseData);
  }

  const showFormHandler = () => {
    setFormState(<ExpenseForm onSaveExpensedData={onSaveExpensedDataHandler} onChangeFormState={closeFormHandler}/>)
  }
  const closeFormHandler = () => {
    setFormState(<button onClick={showFormHandler}>Add New Expense</button>)
  }
  const [formState, setFormState] = useState(<button onClick={showFormHandler}>Add New Expense</button>)

  return (
    <div className='new-expense'>
      {formState}
    </div>
  )
}

export default NewExpense;