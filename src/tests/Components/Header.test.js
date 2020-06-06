//virtually rendering the component
//react -library to do it react-test-render

//import ReactShallowRenderer from 'react-test-renderer/shallow';
import React from 'react'
import { Header } from '../../components/Header';
import { shallow } from 'enzyme';

let startLogOut, wrapper;

beforeEach(() => {
    startLogOut = jest.fn();
    wrapper = shallow(<Header startLogOut={startLogOut} />);
})

test('should render header correctly', () => {
    expect(wrapper).toMatchSnapshot();
    // const renderer = new ReactShallowRenderer
    // renderer.render(<Header />);
    // expect(renderer.getRenderOutput()).toMatchSnapshot();
    //console.log(renderer.getRenderOutput());
});

test('should call startout on logout button', () => {
    wrapper.find('button').simulate('click');
    expect(startLogOut).toHaveBeenLastCalledWith();
});

