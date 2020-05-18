//this js is passed to ExpenseHome.js to render the view in UI

import React from 'react';
import { connect } from 'react-redux'; //used to connect to store and its a HOC 


const ExpensesList = (props) => (
    <div>
        <h1>Expenses List</h1>
        {props.expenses.length}
    </div>
);

//connect syntax connect(function with state as args)(Name of Component to connect)
//connect function
//standard name used as mapStateToProps
const mapStateToProps = (state) => {
    return {
        expenses: state.expenses //this can be accessed as props in connected component in my case 'ExpenseList'
    };
};

export default connect(mapStateToProps)(ExpensesList); //connecting redux store to react component
