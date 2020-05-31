import uniqid from 'uniqid'
import database from '../firebase/firebase';
import { firebase } from '../firebase/firebase';

//actions generator for expense
export const addExpenseAction = (expense) => (
    {
        type: 'ADD_EXPENSE',
        expense
    }
);

//Since we are using database and passing as function  we need to change the action a little bit

export const startAddExpenseAction = ({ description = '', note = '', amount = 0, createdAt = 0 } = {}) => {
    return (dispatch) => {
        const expense = { description, note, amount, createdAt };
        //add to Db -- till push we are adding to DB , to display in front-end we pass an action in then
        database.ref('expenses').push(expense).then((ref) => {
            dispatch(addExpenseAction({ id: ref.key, ...expense }))
        })
    }
};

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