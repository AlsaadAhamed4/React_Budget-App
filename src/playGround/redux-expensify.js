import { createStore, combineReducers } from 'redux'


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