import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';


const PublicRoute = ({ isAuthenticated, component: Component, ...restOfProps }) => (
    <Route {...restOfProps} component={(props) => (
        isAuthenticated ? (
            <Redirect to='/dashboard' />
        ) : (
                <Component {...props} />
            )
    )} />
);

const mapStateToProps = (state) => ({
    isAuthenticated: !!state.auth.uid
});

export default connect(mapStateToProps)(PublicRoute); 