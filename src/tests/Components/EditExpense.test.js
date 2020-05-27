import React from 'react';
import { shallow } from 'enzyme';
import { EditExpensePage } from '../../components/EditExpense';

const expenses = [
    {
        id: 'one',
        description: 'Test with form data',
        amount: 1200,
        createdAt: 1000,
        note: 'Alsaad test'
    }
]

let editExpense, removeExpense, historyspy, wrapper;

beforeEach(() => {
    editExpense = jest.fn();
    removeExpense = jest.fn();
    historyspy = {
        push: jest.fn()
    }

    wrapper = shallow(<EditExpensePage expense={expenses[0]} editExpense={editExpense} removeExpense={removeExpense} history={historyspy}  />);
});


test('should render editexpense page ', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should handle on edit expense', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[0]);
    expect(historyspy.push).toHaveBeenLastCalledWith('/');
    expect(editExpense).toHaveBeenLastCalledWith(expenses[0].id, expenses[0]);
    
});

test('should render remove expense', () => {
    wrapper.find('button').simulate('click');
    expect(historyspy.push).toHaveBeenLastCalledWith('/');
    expect(removeExpense).toHaveBeenLastCalledWith(expenses[0].id);
})


