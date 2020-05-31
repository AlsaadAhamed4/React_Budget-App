import { createStore, combineReducers, applyMiddleware, compose } from 'redux';

import expensesReducer from '../Reducers/ExpenseReducer';
import filtersReducer from '../Reducers/FiltersReducers';
import thunk from 'redux-thunk';


//store creation and combined reducer

//for applying middleware because of devtools we need to change code little bit
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
    const store = createStore(
        combineReducers({
            expenses: expensesReducer,
            filters: filtersReducer
        }),
        composeEnhancer(applyMiddleware(thunk)) //to use databse related work we need to use  thunk and pass function to redux
    );
    return store;
}

// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()  //for redux dev tools 