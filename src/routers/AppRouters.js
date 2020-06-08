import { Router, Route, Switch } from 'react-router-dom'
import React from 'react';
import createBrowserHistory from 'history/createBrowserHistory';
import ExpenseHomePage from '../components/ExpenseHomePage';
import AddExpensePage from '../components/AddExpense';
import EditExpensePage from '../components//EditExpense';
import HelpExpensePage from '../components/Help';
import NotFound from '../components/NotFound';
import LoginPage from '../components/LoginPage';
import PrivateRoute from '../routers/PrivateRoute'; //is a component
import PublicRoute from '../routers/PublicRoute';

export const history = createBrowserHistory();

const AppRouter = () => (
    <Router history={history}>
        <div>
            <Switch>
                <PublicRoute exact path="/" component={LoginPage} />
                <PrivateRoute path="/dashboard" component={ExpenseHomePage} />
                <PrivateRoute path="/create" component={AddExpensePage} />
                <PrivateRoute path="/edit/:id" component={EditExpensePage} />
                <Route path="/help" component={HelpExpensePage} />
                <Route component={NotFound} />
            </Switch>
        </div>
    </Router>
);

export default AppRouter;