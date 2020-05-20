import React from 'react';
import ExpenseForm from "../components/ExpenseForm";
import { connect } from 'react-redux';
import { editExpenseAction, removeExpenseAction } from '../Actions/ExpenseAction';



const EditExpensePage = (props) => {
    console.log(props.expense);
    return (
        <div>
            <p>Edit Expense {props.match.params.id}</p>
            <ExpenseForm editData={props.expense} onSubmit={(expense) => {
                props.dispatch(editExpenseAction(props.match.params.id, expense))
                props.history.push('/')
            }} />
            <button onClick={(e) => {
                props.dispatch(removeExpenseAction({ id: props.expense.id }))
                props.history.push('/')
            }}>Remove</button>
        </div>
    )
};

const mapStateToProp = (state, props) => {
    return {
        expense: state.expenses.find(({ id }) => id === props.match.params.id)
    };
};

export default connect(mapStateToProp)(EditExpensePage);
