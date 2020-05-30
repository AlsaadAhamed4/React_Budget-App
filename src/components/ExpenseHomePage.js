import React from 'react';
import ExpensesList from './ExpensesList'; //renders list in UI
import ExpensesListFilter from './ExpensesListFilter'; //renders input text 
import TotalExpenses from './TotalExpenses';


const ExpenseHomePage = () => (
    <div>
        <TotalExpenses />
        <ExpensesListFilter />
        <ExpensesList />
    </div>
);

export default ExpenseHomePage;
