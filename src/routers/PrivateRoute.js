import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from '../components/Header';

//we have passed props to privateroute and we can't make privateroute as name export 
const PrivateRoute = ({ isAuthenticated, component: Component, ...restOfProps }) => (
    <Route {...restOfProps} component={(props) => (
        isAuthenticated ? (
            <div>
                <Header />
                <Component {...props} />
            </div>
        ) : (
                <Redirect to='/' />
            )
    )} />
);

const mapStateToProps = (state) => ({
    isAuthenticated: !!state.auth.uid
});

export default connect(mapStateToProps)(PrivateRoute);