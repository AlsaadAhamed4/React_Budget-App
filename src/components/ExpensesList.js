//this js is passed to ExpenseHome.js to render the view in UI

import React from 'react';
import { connect } from 'react-redux'; //used to connect to store and its a HOC 
import ExpensesListItem from './ExpensesListItem';
import filterExpenses from '../Selectors/FilterExpenses';

//named export for testing because we should use un connected 
export const ExpensesList = (props) => (
    <div>
        <p>Expense List</p>
        {
            props.expenses.length === 0 ? (
                <p>No ExpenseS</p>
            ) :
                (
                    props.expenses.map((exp) => {
                        return <ExpensesListItem {...exp} key={exp.id} />
                    })
                )
        }
    </div>
);

//connect syntax connect(function with state as args)(Name of Component to connect)
//connect function
//standard name used as mapStateToProps

//filterExpenses accepts expense and filters based on filter it filter the expenses
const mapStateToProps = (state) => {
    return {
        expenses: filterExpenses(state.expenses, state.filters) //this can be accessed as props in connected component in my case 'ExpenseList'
    };
};

export default connect(mapStateToProps)(ExpensesList); //connecting redux store to react component
