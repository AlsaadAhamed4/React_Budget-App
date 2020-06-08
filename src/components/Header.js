import { NavLink } from 'react-router-dom'
import React from 'react';
import { startLogOut } from '../Actions/auth';
import { connect } from 'react-redux';

export const Header = ({ startLogOut }) => (
    <header>
        <h1>Expensify</h1>
        <NavLink exact={true} activeClassName="is-active" to='/dashboard'>Home Page</NavLink>
        <NavLink activeClassName="is-active" to='/create'>Create</NavLink>
        <NavLink activeClassName="is-active" to='/help'>Help</NavLink>
        <button onClick={startLogOut}>Logout</button>
    </header>
);

const mapDispatchToProps = (dispatch) => ({
    startLogOut: () => dispatch(startLogOut())
});

export default connect(undefined, mapDispatchToProps)(Header);