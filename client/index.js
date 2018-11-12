import React, { memo } from 'react';
import { render } from 'react-dom';
import { HashRouter, Route, Switch, Link } from 'react-router-dom'
// import { createHistory } from 'history';

import Login from './components/Login';
import LoggedIn from './components/LoggedIn';
// import Error from './components/Error';

const Root = memo(() => (
    <HashRouter>
        <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/loggedin/:accessToken/:refreshToken" component={LoggedIn} />
            {/* <Route path="/error/:errorMsg" component={Error} /> */}
        </Switch>
    </HashRouter>
));

const rootElement = document.getElementById('root');
render(<Root />, rootElement);