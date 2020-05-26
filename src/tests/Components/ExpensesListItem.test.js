import React from 'react';
import { shallow } from 'enzyme';
import ExpensesListItem from '../../components/ExpensesListItem';

//testing data
const expenses = [
    {
        id: 'aasd',
        description: 'hola',
        amount: 1000,
        createdAt: 1200
    },
    {
        id: 'wwww',
        description: 'Hola Test 1',
        amount: 1100,
        createdAt: 1100
    },
    {
        id: 'eeee',
        description: 'Hola Test 2 ',
        amount: 1200,
        createdAt: 1200
    }
];

test('should render expensesListItem', () => {
    const wrapper = shallow(<ExpensesListItem {...expenses[1]} />);
    expect(wrapper).toMatchSnapshot();
})