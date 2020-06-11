import React from 'react';
import { removeExpenseAction, editExpenseAction } from '../Actions/ExpenseAction';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

const ExpensesListItem = ({ description, amount, createdAt, id }) => (
    <div className='expenselist-item'>
        <Link className='expenselist-item--link' to={`/edit/${id}`}>
            <div className='expenselist-item__name'>
                <h1>{description}</h1>
                <p>{moment(createdAt).format('MMMM Do, YYYY')}</p>
            </div>
            <div className='expenselist-item__amount'>
                <p>{numeral(amount / 100).format('$0,0.00')}</p>
            </div>
        </Link>
    </div>
);

export default ExpensesListItem;