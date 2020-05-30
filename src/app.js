import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; //to connect react and redux
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import AppRouter from './routers/AppRouters';
import ExpensifyStore from './Store/ExpensifyStore';
import { addExpenseAction, removeExpenseAction, editExpenseAction } from './Actions/ExpenseAction';
import { sortByAmountAction, sortByDateAction, setStartDateAction, setEndDateAction, setTextFilterAction } from './Actions/FiltersAction';
import filterExpenses from './Selectors/FilterExpenses';
import 'react-dates/lib/css/_datepicker.css';
import './firebase/firebase';

const store = ExpensifyStore();

const unsubscribe = store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = filterExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
});

//store.dispatch(addExpenseAction({ description: 'Water Bill', note: 'Adding new Bill', amount: 2500, createdAt: 1200 }));
//store.dispatch(addExpenseAction({ description: 'Gas Bill', note: 'Adding new Gas', amount: 1200, createdAt: 1500 }));

//provider enables our store to be available for each component 
//provider accepts a prop that is store
const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);



ReactDOM.render(jsx, document.getElementById('app'));