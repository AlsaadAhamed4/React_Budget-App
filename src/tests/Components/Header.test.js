//virtually rendering the component
//react -library to do it react-test-render

import ReactShallowRenderer from 'react-test-renderer/shallow';
import React from 'react'
import Header from '../../components/Header';


test('should render header correctly', () => {
    const renderer = new ReactShallowRenderer
    renderer.render(<Header/>);
    expect(renderer.getRenderOutput()).toMatchSnapshot();
    //console.log(renderer.getRenderOutput());
})
