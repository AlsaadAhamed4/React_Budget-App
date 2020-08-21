import { Link } from 'react-router-dom'
import React from 'react';
import { startLogOut } from '../Actions/auth';
import { connect } from 'react-redux';

export const Header = ({ startLogOut }) => (
    <header className='header'>
        <div className='content-container'>
            <div className='header__content'>
                <Link className='header__link' exact="true" to='/dashboard'><h1>Budget-App</h1></Link>
                <button className='button button--link ' onClick={startLogOut}>Logout</button>
            </div>
        </div>
    </header>
);

const mapDispatchToProps = (dispatch) => ({
    startLogOut: () => dispatch(startLogOut())
});

export default connect(undefined, mapDispatchToProps)(Header);