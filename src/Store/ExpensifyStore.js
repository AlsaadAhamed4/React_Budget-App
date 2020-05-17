import { createStore, combineReducers } from 'redux';

import expensesReducer from '../Reducers/ExpenseReducer';
import filtersReducer from '../Reducers/FiltersReducers';


//store creation and combined reducer

export default () => {
    const store = createStore(
        combineReducers({
            expenses: expensesReducer,
            filters: filtersReducer
        })
    );
    return store;
}
