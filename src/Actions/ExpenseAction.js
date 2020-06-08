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

//Since we are using database and passing as function  we need to change the action a little bit.
//as we have created user so we change the structure of DB

export const startAddExpenseAction = ({ description = '', note = '', amount = 0, createdAt = 0 } = {}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        const expense = { description, note, amount, createdAt };
        //add to Db -- till push we are adding to DB , to display in front-end we pass an action in then
        //added return for testing purpose
        return database.ref(`users/${uid}/expenses`).push(expense).then((ref) => {
            dispatch(addExpenseAction({ id: ref.key, ...expense }))
        });
    }
};

export const removeExpenseAction = (id) => (
    {
        type: 'REMOVE_EXPENSE',
        id
    }
);

export const startRemoveExpenseAction = ({ id } = {}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        //remove from DB
        return database.ref(`users/${uid}/expenses/${id}`).remove().then(() => {
            //to remove from store
            dispatch(removeExpenseAction(id));
        });
    }
}

export const editExpenseAction = (id, updates) => (
    {
        type: 'EDIT_EXPENSE',
        id,
        updates
    }
);

export const startEditExpenseAction = (id, updates) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        //updating the DB
        return database.ref(`users/${uid}/expenses/${id}`).update({ ...updates }).then((snapshot) => {
            //update store
            dispatch(editExpenseAction(id, updates));
        });
    }
}

//SET_EXPENSE Dispatch Action fetch data fro server and add it to store
export const setExpense = (expense) => ({
    type: 'SET_EXPENSE',
    expense
});

//startSerExpense ASYNC Function
export const startSetExpenseAction = () => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        const dbExpenses = [];
        return database.ref(`users/${uid}/expenses`).once('value').then((snapshot) => {
            snapshot.forEach((childSnapshot) => {
                dbExpenses.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val()
                });
            });
            //adds to store
            dispatch(setExpense(dbExpenses));
        });
    }
}