import React from 'react';
import { removeExpenseAction } from '../Actions/ExpenseAction';
import { connect } from 'react-redux';


const ExpensesListItem = ({ description, amount, createdAt, id, dispatch }) => (
    <div>
        <h1>{description}</h1>
        <p>{amount}</p>
        <p>{createdAt}</p>
        <button onClick={(e) => {
            dispatch(removeExpenseAction({ id }))
        }}>Remove</button>
    </div>
);

export default connect()(ExpensesListItem); //only to access dispacth 