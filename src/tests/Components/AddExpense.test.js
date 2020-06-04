import React from 'react';
import { shallow } from 'enzyme';
import { AddExpensePage } from '../../components/AddExpense';

const expenses = [
    {
        id: 'one',
        description: 'Test with form data',
        amount: 1200,
        createdAt: 1000,
        note: 'Alsaad test'
    }
]

//since we are using same lines of code for each test we can handle that by using jest lifecycle methods

let startAddExpense, historyspy, wrapper;

//run before eact test cases

beforeEach(() => {
    //spie in enzyme
    startAddExpense = jest.fn();
    historyspy = {
        push: jest.fn()
    }
    wrapper = shallow(<AddExpensePage startAddExpense={startAddExpense} history={historyspy} />);
});

test('should render add expense page corectly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should handle on submit', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[0]);
    expect(historyspy.push).toHaveBeenLastCalledWith('/'); //checking whether it was called by the data
    expect(startAddExpense).toHaveBeenLastCalledWith(expenses[0]);
});
