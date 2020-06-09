import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../Actions/auth';


export const LoginPage = ({ startLogin }) => (
    <div className='box-layout'>
        <div className='box-layout__box'>
            <h1 className='box-layout__title'>Budget-App</h1>
            <p>Manage your expenses.</p>
            <button className='login-button' onClick={startLogin}>Login with Google</button>
        </div>
    </div>
);

const mapDispacthToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispacthToProps)(LoginPage);