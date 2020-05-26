import React from 'react';
import { removeExpenseAction, editExpenseAction } from '../Actions/ExpenseAction';
import { Link } from 'react-router-dom';

const ExpensesListItem = ({ description, amount, createdAt, id }) => (
    <div>
        <Link to={`/edit/${id}`}><h1>{description}</h1></Link>
        <p>{amount}</p>
        <p>{createdAt}</p>
    </div>
);

export default ExpensesListItem;