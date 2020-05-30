import React from 'react';
import { connect } from 'react-redux';
import { totalExpenses } from '../Selectors/Total-Expenses';
import filterExpenses from "../Selectors/FilterExpenses";

export const TotalExpenses = ({ totalExpensesAmount, totalExpensesCount }) => {
    const expenseWord = totalExpensesCount === 1 ? 'expense' : 'expenses';
    return (
        <div>
            <h1>Viewing {totalExpensesCount} {expenseWord} - Totaling {totalExpensesAmount}</h1>
        </div>
    )
};

const mapStateToprops = (state) => {
    const visibleExpenses = filterExpenses(state.expenses, state.filters);
    return {
        totalExpensesAmount: totalExpenses(visibleExpenses),
        totalExpensesCount: visibleExpenses.length
    };
};

export default connect(mapStateToprops)(TotalExpenses);