import React from 'react';


const ExpensesListItem = ({ description, amount, createdAt}) => (
    <div>
        <h1>{description}</h1>
        <p>{amount}</p>
        <p>{createdAt}</p>
    </div>
);

export default ExpensesListItem;