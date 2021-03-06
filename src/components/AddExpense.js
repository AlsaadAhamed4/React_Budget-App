import React from 'react';
import ExpenseForm from './ExpenseForm';
import { connect } from 'react-redux';
import { startAddExpenseAction } from '../Actions/ExpenseAction';

//made a class base function to remove inline function for submit by using mapDispatchToProps
//export for testing

export class AddExpensePage extends React.Component {
    onSubmit = (expense) => {
        this.props.startAddExpense(expense) //dispatching through mapDispatchToProps
        this.props.history.push('/')
    }
    render() {
        return (
            <div>
                <div className='totalexpense-header'>
                    <div className='content-container'>
                        <h1 className='totalexpense-content__title'>Add Expense</h1>
                    </div>
                </div>
                <div className='content-container'>
                    <ExpenseForm onSubmit={this.onSubmit} />
                </div>
            </div>
        )
    }
}


// const AddExpensePage = (props) => {
//     console.log(props);
//     return (
//         <div>
//             <h1>Add Expense</h1>
//             <ExpenseForm onSubmit={(expense) => {
//                 props.dispatch(addExpenseAction(expense))
//                 props.history.push('/')
//             }} />
//         </div>
//     )
// };

//passing a props to expenseform so that we could use it for edit 
//we are passing a props function so that we recive submitted data an then we dispatch it to store.

//to dispatch we only need to connect it and add it to store

//push is used to redirect to a path

//note : We can make props.dispatch(addExpenseAction(expense)) to be simple , As connect has two args
// 1 mapStateToProps  2 mapDispacthToProps  in dispatch we can pass it so that testing can be easier

const mapDispatchToProps = (dispatch) => (
    {
        startAddExpense: (expense) => dispatch(startAddExpenseAction(expense))
    }
);

export default connect(undefined, mapDispatchToProps)(AddExpensePage);