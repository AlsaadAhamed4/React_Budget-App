import { createStore, combineReducers } from 'redux';

import expensesReducer from '../Reducers/ExpenseReducer';
import filtersReducer from '../Reducers/FiltersReducers';


//store creation and combined reducer

export default () => {
    const store = createStore(
        combineReducers({
            expenses: expensesReducer,
            filters: filtersReducer
        }),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()  //for redux dev tools 
    );
    return store;
}
