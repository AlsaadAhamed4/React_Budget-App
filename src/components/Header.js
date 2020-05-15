import {NavLink } from 'react-router-dom'
import React from 'react';

const Header = () => (
    <header>
        <h1>Expensify</h1>
        <NavLink exact={true} activeClassName="is-active" to='/'>Home Page</NavLink>
        <NavLink activeClassName="is-active" to='/create'>Create</NavLink>
        <NavLink activeClassName="is-active" to='/edit'>Edit</NavLink>
        <NavLink activeClassName="is-active" to='/help'>Help</NavLink>
    </header>
);

export default Header;