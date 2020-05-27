import React from 'react';
import { shallow } from 'enzyme';
import ExpenseForm from '../../components/ExpenseForm';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import { shallowEqual } from 'react-redux';

const expenses = [
    {
        id: 'one',
        description: 'Test with form data',
        amount: 1200,
        createdAt: 1000,
        note: 'Alsaad test'
    }
]

test('should render Expenses Form ', () => {
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
});

test('should render expense with data', () => {
    const wrapper = shallow(<ExpenseForm editData={expenses[0]} />);
    expect(wrapper).toMatchSnapshot();
})

test('should render error for invalid form submission', () => {
    const wrapper = shallow(<ExpenseForm />);
    //since we are have  preventOnDefault(e) so we need an args
    wrapper.find('form').simulate('submit', {
        preventDefault: () => { }
    });
    expect(wrapper.state('errMsg').length).toBeGreaterThan(0); //to check If there's any error
    expect(wrapper).toMatchSnapshot();
})

test('should set description on change', () => {
    const value = 'new description';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(0).simulate('change', {
        target: { value }
    });
    expect(wrapper.state('description')).toBe(value);
    expect(wrapper).toMatchSnapshot();
})

test('should set Note on change', () => {
    const value = 'new Note';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('textarea').simulate('change', {
        target: { value }
    });
    expect(wrapper.state('note')).toBe(value);
    expect(wrapper).toMatchSnapshot();
})

test('should set amount on valid input', () => {
    const value = '2.50';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(1).simulate('change', {
        target: { value }
    });
    expect(wrapper.state('amount')).toBe(value);
    expect(wrapper).toMatchSnapshot();
})

test('should set amount on in-valid input', () => {
    const value = '2.501';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(1).simulate('change', {
        target: { value }
    });
    expect(wrapper.state('amount')).toBe('');
    expect(wrapper).toMatchSnapshot();
})

test('should call on submit prop for valid form submission', () => {
    const onSubmitSpy = jest.fn();
    const wrapper = shallow(<ExpenseForm editData={expenses[0]} onSubmit={onSubmitSpy} />);
    wrapper.find('form').simulate('submit', {
        preventDefault: () => { }
    });
    expect(wrapper.state('errMsg')).toBe('');
    expect(onSubmitSpy).toHaveBeenLastCalledWith({  //here we pass the exact object
        description: expenses[0].description,
        amount: expenses[0].amount,
        createdAt: expenses[0].createdAt,
        note: expenses[0].note
    });
    expect(wrapper).toMatchSnapshot();
})

test('should test new date on date change', () => {
    const now = moment();
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find(SingleDatePicker).prop('onDateChange')(now); //here we pass the arguments for onDatechange function
    expect(wrapper.state('createdAt')).toEqual(now);
    expect(wrapper).toMatchSnapshot();
});

test('should test calender focused is true', () => {
    const focused = true;
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find(SingleDatePicker).prop('onFocusChange')({ focused });
    expect(wrapper.state('calendarFocused')).toBe(true);
    expect(wrapper).toMatchSnapshot();
})


