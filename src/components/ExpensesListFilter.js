import React from 'react';
import { connect } from 'react-redux';
import { setTextFilterAction, sortByAmountAction, sortByDateAction } from '../Actions/FiltersAction';


//this component is responsible for displaying input feild with value of applied filter

//here if we dont use onchange then we cant change the text value
//To set the state to specified filter we need to dispatch it store , we can do it by calling props.dispatch() in onchange
//here in line 15 i am able to write the state by using dispatch and a action 
const ExpensesListFilter = (props) => (
    <div>
        <br />
        <label>Filter Used is:</label><input type='text' value={props.filters.text} onChange={(e) => {
            props.dispatch(setTextFilterAction(e.target.value))
        }} />
        <br />
        <select value={props.filters.sortBy} onChange={(e) => {
            e.target.value === 'amount' ? props.dispatch(sortByAmountAction()) : props.dispatch(sortByDateAction())
        }}>
            <option value='date'>Date</option>
            <option value='amount'>Amount</option>
        </select>
    </div>
);

const mapSateToProps = (state) => {
    return {
        filters: state.filters
    }
};

export default connect(mapSateToProps)(ExpensesListFilter);