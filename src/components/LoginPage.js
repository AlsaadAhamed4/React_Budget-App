import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../Actions/auth';


export const LoginPage = ({ startLogin }) => (
    <div>
        <p>Login Page</p>
        <button onClick={startLogin}>Login</button>
    </div>
);

const mapDispacthToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispacthToProps)(LoginPage);