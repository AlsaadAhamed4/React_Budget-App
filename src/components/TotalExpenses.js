import React from 'react';
import { connect } from 'react-redux';
import { totalExpenses } from '../Selectors/Total-Expenses';
import filterExpenses from "../Selectors/FilterExpenses";
import { Link } from 'react-router-dom';

export const TotalExpenses = ({ totalExpensesAmount, totalExpensesCount }) => {
    const expenseWord = totalExpensesCount === 1 ? 'expense' : 'expenses';
    return (
        <div className='totalexpense-header'>
            <div className='content-container'>
                <h1 className='totalexpense-content__title'>Viewing <span>{totalExpensesCount}</span> {expenseWord} - Totaling <span>{totalExpensesAmount}</span></h1>
                <div className='totalexpense-header__action'>
                    <Link className='button' to='/create'>Add Expense</Link>
                </div>
            </div>
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