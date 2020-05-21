import { addExpenseAction, editExpenseAction, removeExpenseAction } from '../../Actions/ExpenseAction';

test('Should set-up remove expense action object', () => {
    const action = removeExpenseAction({ id: 'abc123' });
    //here equal checks the properties of object
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: 'abc123'
    });
});

test('Should set-up edit expense action object', () => {
    const action = editExpenseAction('abc123', { description: 'Hello', amount: 2500 });
    //here equal checks the properties of object
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: 'abc123',
        updates: {
            description: 'Hello',
            amount: 2500
        }
    });
});

test('Should set-up Add expense action object', () => {
    const expenseData = { description: 'Alsaad', note: 'Test', amount: 1400, createdAt: 10000 };
    const action = addExpenseAction(expenseData);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String),
        }
    })
});

test('Should set-up default Add expense action object', () => {
    const action = addExpenseAction();
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            description: '',
            note: '',
            amount: 0,
            createdAt: 0,
            id: expect.any(String),
        }
    })
});