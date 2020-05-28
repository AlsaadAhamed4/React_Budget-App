import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesListFilter } from '../../components/ExpensesListFilter';
import moment from 'moment';
import { DateRangePicker } from 'react-dates'

const filters = {
    text: "",
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
}

const altFilters = {
    text: "Bill",
    sortBy: 'amount',
    startDate: moment(0),
    endDate: moment(0).add(3, 'days')
}

let setStartDate, setEndDate, setTextFilter, sortByAmount, sortByDate, wrapper;

beforeEach(() => {
    setStartDate = jest.fn();
    setEndDate = jest.fn();
    setTextFilter = jest.fn();
    sortByAmount = jest.fn();
    sortByDate = jest.fn();
    filters

    wrapper = shallow(<ExpensesListFilter
        setStartDate={setStartDate}
        setEndDate={setEndDate}
        setTextFilter={setTextFilter}
        sortByAmount={sortByAmount}
        sortByDate={sortByDate}
        filters={filters}
    />);
});

test('should render expensesListFilters', () => {
    expect(wrapper).toMatchSnapshot();
})

test('should render expensesListFilters with altData correctly', () => {
    //here we want change the props so we use setProps a enzyme method
    wrapper.setProps({
        filters: altFilters
    });
    expect(wrapper).toMatchSnapshot();
})

test('should handle text change', () => {
    const value = 'Text Change test'
    wrapper.find('input').simulate('change', {
        target: { value }
    });
    expect(setTextFilter).toHaveBeenLastCalledWith(value);
});

test('should sortBy date', () => {
    const value = 'date'
    wrapper.find('select').simulate('change', {
        target: { value }
    });
    expect(sortByDate).toHaveBeenLastCalledWith();
    expect(wrapper).toMatchSnapshot();
});

test('should sortBy amount', () => {
    wrapper.setProps({
        filters: altFilters
    });
    const value = 'amount'
    wrapper.find('select').simulate('change', {
        target: { value }
    });
    expect(sortByAmount).toHaveBeenLastCalledWith();
    expect(wrapper).toMatchSnapshot();
});

test('should handle date changes', () => {
    const startDate = moment(0).add(4, "years");
    const endDate = moment(0).add(8, "years");
    wrapper.find(DateRangePicker).prop('onDatesChange')({ startDate, endDate });
    expect(setStartDate).toHaveBeenLastCalledWith(startDate);
    expect(setEndDate).toHaveBeenLastCalledWith(endDate);
});

test('shoul handle on date focus change', () => {
    const calendarFocused = 'startDate';
    wrapper.find(DateRangePicker).prop('onFocusChange')(calendarFocused);
    expect(wrapper.state('calendarFocused')).toBe(calendarFocused);
});
