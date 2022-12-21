// import ExpenseItem from "./ExpenseItem";
import "./ExpensesWrapper.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
import ExpenseList from "./ExpensesList";

const ExpensesWrapper = (props) => {
  const [enteredFilter, setEnteredFilter] = useState("2020");

  const filterChangeHandler = (newFilter) => {
    setEnteredFilter(newFilter);
  };

  const filteredExpenses = props.data.filter((expense) => {
    if (enteredFilter === "None") {
      return true;
    } else {
      return expense.date.getFullYear() === parseInt(enteredFilter);
    }
  });

  return (
    <Card className="expenses-wrapper">
      <ExpensesFilter
        onFilterChange={filterChangeHandler}
        selected={enteredFilter}
      />
      <ExpenseList items = {filteredExpenses} />
    </Card>
  );
};

export default ExpensesWrapper;
