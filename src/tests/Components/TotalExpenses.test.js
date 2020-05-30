import React from 'react';
import { shallow } from 'enzyme';
import { TotalExpenses } from '../../components/TotalExpenses';
import numeral from 'numeral'

let wrapper, totalExpensesCount, totalExpensesAmount;

test('should render totalExpenses to be empty', () => {
    wrapper = shallow(<TotalExpenses totalExpensesCount={0} totalExpensesAmount={numeral(0).format('$0,0.00')} />);
    expect(wrapper).toMatchSnapshot();
})


beforeEach(() => {

    totalExpensesCount = 1;
    totalExpensesAmount = numeral(222.10).format('$0,0.00');

    wrapper = shallow(<TotalExpenses totalExpensesCount={totalExpensesCount} totalExpensesAmount={totalExpensesAmount} />);
});

test('should render totalExpenses', () => {
    expect(wrapper).toMatchSnapshot();
});
