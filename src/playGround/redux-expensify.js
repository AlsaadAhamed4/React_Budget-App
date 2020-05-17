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

const editExpense = (id, updates) => (
    {
        type: 'EDIT_EXPENSE',
        id,
        updates
    }
);

const setTextFilter = (text = "") => (
    {
        type: 'SET_TEXT_FILTER',
        text
    }
)

const sortByAmount = () => (
    {
        type: 'SORT_BY_AMOUNT',
    }
);

const sortByDate = () => (
    {
        type: 'SORT_BY_DATE',
    }
);

const setStartDate = (sDate) => (
    {
        type: 'SET_START_DATE',
        sDate
    }
);

const setEndDate = (eDate) => (
    {
        type: 'SET_END_DATE',
        eDate
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
            return state.filter(({ id }) => id !== action.id);
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if (expense.id === action.id) {
                    return {
                        ...expense, ...action.updates
                    }
                }
                else {
                    return expense;
                }
            });
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
        case 'SET_TEXT_FILTER':
            return { ...state, text: action.text };
        case 'SORT_BY_AMOUNT':
            return { ...state, sortBy: 'amount' };
        case 'SORT_BY_DATE':
            return { ...state, sortBy: 'date' };
        case 'SET_START_DATE':
            return { ...state, startDate: action.sDate };
        case 'SET_END_DATE':
            return { ...state, endDate: action.eDate };
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

//filtering the expenses and returning expensese

const filterExpenses = (expenses, { text, sortBy, startDate, endDate }) => (
    expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate; //here if the createdAt is greater than the startDate or if we did mention the start date that is undefined then return true 
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        if (sortBy === 'date') {
            return a.createdAt > b.createdAt ? -1 : 1;  //if a should be first then -1 , if b then 1
        }
        else if (sortBy === 'amount') {
            return a.amount > b.amount ? -1 : 1;
        }

    })
);

const unsubscribe = store.subscribe(() => {
    const state = store.getState();
    const filtered = filterExpenses(state.expenses, state.filters);
    console.log(filtered);
    //console.log(store.getState());
})

const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 2500, createdAt: 2000 }));
const expenseTwo = store.dispatch(addExpense({ description: 'coffee', amount: 4500, createdAt: 1500 }));

// store.dispatch(removeExpense({ id: expenseTwo.expense.id }));

// store.dispatch(editExpense(expenseOne.expense.id, { amount: 111 }));

//store.dispatch(setTextFilter('ff'));

store.dispatch(sortByAmount());

store.dispatch(sortByDate());

//store.dispatch(setStartDate(1000));

//store.dispatch(setEndDate());


//never used
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
