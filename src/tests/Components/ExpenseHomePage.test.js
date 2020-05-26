import React from 'react';
import { shallow } from 'enzyme';
import ExpenseHomePage from '../../components/ExpenseHomePage';

test('should render expense dashboard', () => {
    const wrapper = shallow(<ExpenseHomePage />);
    expect(wrapper).toMatchSnapshot();
});
