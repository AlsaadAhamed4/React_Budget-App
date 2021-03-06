import React from 'react';
import ExpenseForm from "../components/ExpenseForm";
import { connect } from 'react-redux';
import { startEditExpenseAction, startRemoveExpenseAction } from '../Actions/ExpenseAction';

export class EditExpensePage extends React.Component {
    onSubmit = (expense) => {
        this.props.startEditExpense(this.props.expense.id, expense);
        this.props.history.push('/');
    }

    OnRemove = (e) => {
        this.props.startRemoveExpense(this.props.expense.id);
        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <div className='totalexpense-header'>
                    <div className='content-container'>
                        <h1 className='totalexpense-content__title'>Edit Expense</h1>
                    </div>
                </div>
                <div className='content-container'>
                    <ExpenseForm editData={this.props.expense} onSubmit={this.onSubmit} />
                    <button className='button remove-button--modifier' onClick={this.OnRemove}>Remove Expense</button>
                </div>
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
        startEditExpense: (id, expense) => dispatch(startEditExpenseAction(id, expense)),
        startRemoveExpense: (id) => dispatch(startRemoveExpenseAction({ id }))
    }
);

export default connect(mapStateToProp, mapDispatchToProps)(EditExpensePage);
