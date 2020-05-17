import uniqid from 'uniqid'

//actions generator for expense
export const addExpenseAction = ({ description = '', note = '', amount = 0, createdAt = 0 } = {}) => (
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

export const removeExpenseAction = ({ id } = {}) => (
    {
        type: 'REMOVE_EXPENSE',
        id
    }
);

export const editExpenseAction = (id, updates) => (
    {
        type: 'EDIT_EXPENSE',
        id,
        updates
    }
);