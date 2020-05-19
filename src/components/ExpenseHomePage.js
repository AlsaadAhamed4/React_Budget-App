import React from 'react';
import ExpensesList from './ExpensesList'; //renders list in UI
import ExpensesListFilter  from './ExpensesListFilter'; //renders input text 


const ExpenseHomePage = () => (
    <div>
    <ExpensesListFilter/>
        <ExpensesList />
    </div>
);

export default ExpenseHomePage;
