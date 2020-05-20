import React from 'react';
import ExpenseForm from './ExpenseForm';
import { connect } from 'react-redux';
import { addExpenseAction } from '../Actions/ExpenseAction';


const AddExpensePage = (props) => {
    console.log(props);
    return (
        <div>
            <h1>Add Expense</h1>
            <ExpenseForm onSubmit={(expense) => {
                props.dispatch(addExpenseAction(expense))
                props.history.push('/')
            }} />
        </div>
    )
};

//passing a props to expenseform so that we could use it for edit 
//we are passing a props function so that we recive submitted data an then we dispatch it to store.

//to dispatch we only need to connect it and add it to store

//push is used to redirect to a path

export default connect()(AddExpensePage);