import expenseReducer from '../../Reducers/ExpenseReducer';
import moment from 'moment';
import { testExpenseData } from '../TestData/TestData';

test('should setup default expense Reducer', () => {
    const action = expenseReducer(undefined, { type: '@@INIT' })
    expect(action).toEqual([])
})

const expenses = [
    {
        id: 'aasd',
        description: 'hola',
        note: 'test',
        amount: 1000,
        created: 1000
    },
    {
        id: 'wwww',
        description: 'Hola Test 1',
        note: 'test 1',
        amount: 1100,
        created: 1100
    },
    {
        id: 'eeee',
        description: 'Hola Test 2 ',
        note: 'test',
        amount: 1200,
        created: 1200
    }
]

test('should setup add Expense', () => {
    const expense = {
        id: 'qqqq',
        description: 'Hola Test new ',
        note: 'test new',
        amount: 1300,
        created: 1300
    }
    const action = {
        type: 'ADD_EXPENSE',
        expense

    }
    const result = expenseReducer(expenses, action)
    expect(result).toEqual([...expenses, expense])
})

test('should setup remove expense', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[0].id
    }
    const result = expenseReducer(expenses, action);
    expect(result).toEqual([expenses[1], expenses[2]])
})

test('should setup remove expense with id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: ''
    }
    const result = expenseReducer(expenses, action);
    expect(result).toEqual(expenses)
})


test('should  setup edit expense', () => {
    const updates = {
        id: 'aasd',
        description: 'hola after edit',
        note: 'after edit',
        amount: 1000,
        created: 1000
    }
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[0].id,
        updates
    }
    const result = expenseReducer(expenses, action);

    expect(result[0]).toEqual(updates)
})

test('should  setup edit expense without id', () => {
    const updates = {
        id: 'aasd',
        description: 'hola after edit',
        note: 'after edit',
        amount: 1000,
        created: 1000
    }
    const action = {
        type: 'EDIT_EXPENSE',
        id: '',
        updates
    }
    const result = expenseReducer(expenses, action);
    expect(result).toEqual(expenses)
});

test('should set expenses Reducer', () => {
    const action = {
        type: 'SET_EXPENSE',
        expense: [testExpenseData[0]]
    }
    const result = expenseReducer(expenses, action);
    expect(result).toEqual([testExpenseData[0]]);
});

