import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesList } from '../../components/ExpensesList'
import { addExpenseAction } from '../../Actions/ExpenseAction';

//these are testing data
const expenses = [
    {
        id: 'aasd',
        description: 'hola',
        note: 'test',
        amount: 1000,
        created: 1000
    },
    {
        id: 'wwww',
        description: 'Hola Test 1',
        note: 'test 1',
        amount: 1100,
        created: 1100
    },
    {
        id: 'eeee',
        description: 'Hola Test 2 ',
        note: 'test',
        amount: 1200,
        created: 1200
    }
];

test('should render expenslist with expenses', () => {
    const wrapper = shallow(<ExpensesList expenses={expenses} />);
    expect(wrapper).toMatchSnapshot();
});

test('should render expense list with empty expense', () => {
    const wrapper = shallow(<ExpensesList expenses={[]} />);
    expect(wrapper).toMatchSnapshot();
});

