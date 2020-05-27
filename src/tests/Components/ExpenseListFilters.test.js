import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesListFilter } from '../../components/ExpensesListFilter';
import moment from 'moment';


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
        filters : altFilters
    });
    expect(wrapper).toMatchSnapshot();
})