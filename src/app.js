import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; //to connect react and redux
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import AppRouter, { history } from './routers/AppRouters';
import ExpensifyStore from './Store/ExpensifyStore';
import { addExpenseAction, removeExpenseAction, editExpenseAction, startSetExpenseAction } from './Actions/ExpenseAction';
import { sortByAmountAction, sortByDateAction, setStartDateAction, setEndDateAction, setTextFilterAction } from './Actions/FiltersAction';
import { login, Logout } from '../src/Actions/auth';
import filterExpenses from './Selectors/FilterExpenses';
import 'react-dates/lib/css/_datepicker.css';
import { firebase } from './firebase/firebase';
import LoadingPage from './components/LoadingPage';

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

let hasRendered = false;

//rendering the app once 
const renderApp = () => {
    if (!hasRendered) {
        ReactDOM.render(jsx, document.getElementById('app'));
        hasRendered = true;
    }
}

//before fetching data from server
ReactDOM.render(<LoadingPage />, document.getElementById('app'));

//below code runs when we loads the app and when app status changes
firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        //after sucessfull fetch through startSetExpense
        store.dispatch(login(user.uid));
        store.dispatch(startSetExpenseAction()).then(() => {
            ReactDOM.render(jsx, document.getElementById('app'));
            renderApp();
            if (history.location.pathname === '/') {
                history.push('/dashboard');
            }
        });
        console.log('LoggedIn');
    }
    else {
        console.log('LoggedOut');
        renderApp();
        history.push('/'); //login page
        store.dispatch(Logout());
    }
});

