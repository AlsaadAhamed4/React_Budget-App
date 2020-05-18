import React from 'react';
import ReactDOM from 'react-dom';


const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is : {props.info}</p>
    </div>
);

const withAdminWarning = (WrappedComponent) => { //this is basically a higher order function
    return (props) => (
        <div>
            {props.isAdmin && <p>Higher Order Component - This is private info , don't share</p>}
            <WrappedComponent {...props} />
        </div>
        //here we pass props by destructing it to Info component
    );
}

const requireAuthentication = (WrappedComponent) => { //this is basically a higher order function
    return (props) => (
        <div>
            {props.isAuthenticated ? <WrappedComponent {...props} /> : <p>Higher Order Component - Please Log in to view the message!</p>}

        </div>
        //here we pass props by destructing it to Info component
    );
}

const AdminInfo = withAdminWarning(Info);   //here we pass the sub component to function  which returns a component.
const AuthInfo = requireAuthentication(Info);


//ReactDOM.render(<AdminInfo isAdmin={true} info='The is basic information'/>, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={false} info='The is basic information' />, document.getElementById('app'));