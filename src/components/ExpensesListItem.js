import React from 'react';
import { removeExpenseAction, editExpenseAction } from '../Actions/ExpenseAction';
import { NavLink } from 'react-router-dom';

const ExpensesListItem = ({ description, amount, createdAt, id, dispatch }) => (
    <div>
        <NavLink to={`/edit/${id}`}><h1>{description}</h1></NavLink>
        <p>{amount}</p>
        <p>{createdAt}</p>
    </div >
);

export default ExpensesListItem;