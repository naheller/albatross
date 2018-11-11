import React, { Component } from 'react';
import { render } from 'react-dom';
import { HashRouter, Route, Switch, Link } from 'react-router-dom'
import { createHistory } from 'history';
// import { Consumer } from '../Provider'

import App     from './components/App';
import Login   from './components/Login';
import User    from './components/User';
import Error   from './components/Error';
import Home   from './components/Home';

import AppProvider from './Provider'

const Root = () => (
    <AppProvider>
        <HashRouter>
            <Switch>
                <Route exact path="/app" component={App} />
                <Route exact path="/" component={Home} />
                <Route path="/login" component={Login} />
                <Route path="/user/:accessToken/:refreshToken" component={User} />
                <Route path="/error/:errorMsg" component={Error} />
            </Switch>
        </HashRouter>
    </AppProvider>
);

const rootElement = document.getElementById('root');
render(<Root />, rootElement);