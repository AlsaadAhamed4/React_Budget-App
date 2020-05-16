import { createStore, combineReducers } from 'redux'

//*********Actions*********** */
//ADD_EXPENSE
//REMOVE_EXPENSE
//EDIT_EXPENSE
//SET_TEXT_FILTER
//SORT_BY_DATE
//SORT_BY_AMOUNT
//SET_START_DATE
//SET_END_DATE
//*********Actions*********** */

//we have complex state to mentain we need two reducers
// 1 ExpenseReducer
// 2 filterReducer


//ExpenseReducer
const expensesReducerDefaultState = [];
const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        /*  case 'ADD_EXPENSE':
             return{
 
             }
         case 'REMOVE_EXPENSE': */
        default: return state;
    }
};

//filterreducer
const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        default: return state;
    }
};

//store creation and combined reducer
const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters : filtersReducer
    })
);

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
})

store.dispatch({
    type: 'Hello'
});

const demoState = {
    expenses: [{
        id: 'asd',
        description: 'rent for january',
        note: 'final payment',
        amount: 2500,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    }
};