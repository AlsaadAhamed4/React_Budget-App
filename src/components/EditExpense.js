import React from 'react';
import ExpenseForm from "../components/ExpenseForm";
import { connect } from 'react-redux';
import { editExpenseAction, removeExpenseAction } from '../Actions/ExpenseAction';

export class EditExpensePage extends React.Component {
    onSubmit = (expense) => {
        this.props.editExpense(this.props.expense.id, expense);
        this.props.history.push('/');
    }

    OnRemove = (e) => {
        this.props.removeExpense(this.props.expense.id);
        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <p>Edit Expense</p>
                <ExpenseForm editData={this.props.expense} onSubmit={this.onSubmit} />
                <button onClick={this.OnRemove}>Remove</button>
            </div>
        )
    }
}


/* const EditExpensePage = (props) => {
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
}; */

const mapStateToProp = (state, props) => {
    return {
        expense: state.expenses.find(({ id }) => id === props.match.params.id)
    };
};

const mapDispatchToProps = (dispatch, props) => (
    {
        editExpense: (id, expense) => dispatch(editExpenseAction(id, expense)),
        removeExpense: (id) => dispatch(removeExpenseAction({ id }))
    }
);

export default connect(mapStateToProp, mapDispatchToProps)(EditExpensePage);
