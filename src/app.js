import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const ExpensePage = () => (
    <div>
        <p>This is expense page</p>
    </div>
);

const AddExpensePage = () => (
    <div>
        <p>This is add-expense page</p>
    </div>
);

const EditExpensePage = () => (
    <div>
        <p>This is edit-expense page</p>
    </div>
);

const HelpExpensePage = () => (
    <div>
        <p>This is Help-expense page</p>
    </div>
);


const Notfound = () => (
    <div>
        <p>404 Status</p>
    </div>
);

const routes = (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={ExpensePage} />
            <Route path="/create" component={AddExpensePage} />
            <Route path="/edit" component={EditExpensePage} />
            <Route path="/help" component={HelpExpensePage} />
            <Route component={Notfound} />
        </Switch>
    </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));