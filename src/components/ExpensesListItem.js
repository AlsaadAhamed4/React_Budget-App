import React from 'react';
import { removeExpenseAction, editExpenseAction } from '../Actions/ExpenseAction';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

const ExpensesListItem = ({ description, amount, createdAt, id }) => (
    <div>
        <Link to={`/edit/${id}`}><h1>{description}</h1></Link>
        <p>{numeral(amount / 100).format('$0,0.00')}</p>
        <p>{moment(createdAt).format('MMMM Do, YYYY')}</p>
    </div>
);

export default ExpensesListItem;