import { BrowserRouter, Route, Switch } from 'react-router-dom'
import React from 'react';

import ExpenseHomePage from '../components/ExpenseHomePage';
import AddExpensePage from '../components/AddExpense';
import EditExpensePage from '../components//EditExpense';
import HelpExpensePage from '../components/Help';
import Header from '../components/Header';
import NotFound from '../components/NotFound';
import LoginPage from '../components/LoginPage';



const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route exact path="/" component={LoginPage} />
                <Route path="/dashboard" component={ExpenseHomePage} />
                <Route path="/create" component={AddExpensePage} />
                <Route path="/edit/:id" component={EditExpensePage} />
                <Route path="/help" component={HelpExpensePage} />
                <Route component={NotFound} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;