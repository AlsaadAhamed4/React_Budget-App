import { totalExpenses } from '../../Selectors/Total-Expenses';
import numeral from 'numeral';

const expenses = [
    {
        amount: 2500,
    },
    {
        amount: 1200,
    },
    {
        amount: 1500,
    }
];

const amountsArray1 = [expenses[0].amount, expenses[1].amount, expenses[2].amount];

test('should render total-expense selector', () => {
    const action = totalExpenses(expenses);
    expect(action).toEqual({
        totalExpenseAmount: numeral(amountsArray1.reduce((sum, value) => sum + value, 0) / 100).format('$0,0.00'),
        totalExpenseCount: expenses.length
    })
});