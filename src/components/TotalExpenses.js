import React from 'react';
import { connect } from 'react-redux';
import { totalExpenses } from '../Selectors/Total-Expenses';

export const TotalExpenses = (props) => (
    <div>
        {props.total && <p>Viewing {props.total.totalExpenseCount} expenses - Totaling {(props.total.totalExpenseAmount)}</p>}
    </div>
);

const mapStateToprops = (state) => (
    {
        total: totalExpenses(state.expenses)
    }
);

export default connect(mapStateToprops)(TotalExpenses);