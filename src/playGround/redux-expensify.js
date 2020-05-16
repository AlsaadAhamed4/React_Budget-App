import { createStore, combineReducers } from 'redux'
import uuid from 'uuid';
import uniqid from 'uniqid'

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


//actions generator for expense
const addExpense = ({ description = '', note = '', amount = 0, createdAt = 0 } = {}) => (
    {
        type: 'ADD_EXPENSE',
        expense: {
            id: uniqid(),
            description,
            note,
            amount,
            createdAt
        }
    }
);

const removeExpense = ({ id } = {}) => (
    {
        type: 'REMOVE_EXPENSE',
        id
    }
);


//we have complex state to mentain we need two reducers
// 1 ExpenseReducer
// 2 filterReducer


//ExpenseReducer
const expensesReducerDefaultState = [];
const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [...state, action.expense];
        case 'REMOVE_EXPENSE':
            return state.filter(({id}) => id !== action.id)
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
        filters: filtersReducer
    })
);

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
})

const expenseOne = store.dispatch(addExpense({ description: 'Test', amount: 2500, createdAt: '16-05-2020' }));
const expenseTwo = store.dispatch(addExpense({ description: 'Test-2', amount: 500, createdAt: '16-05-2020' }));

store.dispatch(removeExpense({ id: expenseTwo.expense.id }))

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