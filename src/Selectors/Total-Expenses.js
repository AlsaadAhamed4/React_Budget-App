import React from 'react';
import numeral from 'numeral'

export const totalExpenses = (expenses) => {
    if (expenses.length > 0) {
        return numeral(expenses.map(({ amount }) => amount).reduce((sum, value) => sum + value, 0) / 100).format('$0,0.00');
    }
    else {
        return numeral(0).format('$0,0.00');
    }
};
