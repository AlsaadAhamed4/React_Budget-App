import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import AppRouter from './routers/AppRouters';
import ExpensifyStore from './Store/ExpensifyStore';
import { addExpenseAction, removeExpenseAction, editExpenseAction } from './Actions/ExpenseAction';
import { sortByAmountAction, sortByDateAction, setStartDateAction, setEndDateAction, setTextFilterAction } from './Actions/FiltersAction';
import filterExpenses from './Selectors/FilterExpenses';

const store = ExpensifyStore();

const unsubscribe = store.subscribe(()=>{
    const state = store.getState();
    const visibleExpenses = filterExpenses(state.expenses,state.filters);
    console.log(visibleExpenses);
});

store.dispatch(addExpenseAction({ description: 'Water', note: 'Adding new Bill', amount: 2500, createdAt: 1200 }));
store.dispatch(addExpenseAction({ description: 'Gas Bill', note: 'Adding new Gas', amount: 1200, createdAt: 1500 }));

//store.dispatch(setTextFilterAction('bill'));

store.dispatch(setStartDateAction(1200));



ReactDOM.render(<AppRouter />, document.getElementById('app'));