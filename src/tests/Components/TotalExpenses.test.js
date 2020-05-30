import React from 'react';
import { shallow } from 'enzyme';
import { TotalExpenses } from '../../components/TotalExpenses';
import numeral from 'numeral'

let wrapper, total;

test('should render totalExpenses to be empty', () => {
    wrapper = shallow(<TotalExpenses/>);
    expect(wrapper).toMatchSnapshot();
})


beforeEach(() => {
    total = {
        totalExpenseCount: 1,
        totalExpenseAmount: numeral(222.10).format('$0,0.00')
    }
    wrapper = shallow(<TotalExpenses total={total} />);
});

test('should render totalExpenses', () => {
    expect(wrapper).toMatchSnapshot();
});
