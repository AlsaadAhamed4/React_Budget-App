//virtually rendering the component
//react -library to do it react-test-render

//import ReactShallowRenderer from 'react-test-renderer/shallow';
import React from 'react'
import Header from '../../components/Header';
import { shallow } from 'enzyme'


test('should render header correctly', () => {
    const wrapper = shallow(<Header/>);
    expect(wrapper).toMatchSnapshot();
    // const renderer = new ReactShallowRenderer
    // renderer.render(<Header />);
    // expect(renderer.getRenderOutput()).toMatchSnapshot();
    //console.log(renderer.getRenderOutput());
})
