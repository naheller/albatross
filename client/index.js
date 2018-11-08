import React, { Component } from 'react';
import { render }           from 'react-dom';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk        from 'redux-thunk';
import { Provider } from 'react-redux';
// import { Router, Route, IndexRoute, hashHistory, browserHistory } from 'react-router';
import { HashRouter, Route, Switch, Link } from 'react-router-dom'
import { syncHistory, routeReducer }     from 'react-router-redux';
import { createHistory } from 'history';
import reducer from './reducers';
import App     from './components/App';
import Login   from './components/Login';
import User    from './components/User';
import Error   from './components/Error';
import Home   from './components/Home';

// load our css. there probably is a better way to do this
// but for now this is our move
// require('./style.less');

// Sync dispatched route actions to the history
// const reduxRouterMiddleware = syncHistory(browserHistory)
// const createStoreWithMiddleware = applyMiddleware(
//   thunk,
// //   reduxRouterMiddleware
// )(createStore)
// const store = createStoreWithMiddleware(reducer)

const middleware = [ thunk ]

const store = createStore(
    reducer,
    compose (
        applyMiddleware(...middleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() 
    )
)

class Root extends Component {
    render() {
        return (
            <Provider store={store}>
                <HashRouter>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/login" component={Login} />
                        <Route path="/user/:accessToken/:refreshToken" component={User} />
                        <Route path="/error/:errorMsg" component={Error} />
                    </Switch>
                </HashRouter>
            </Provider>
        );
    }
}

// render town
const rootElement = document.getElementById('root');
render(<Root />, rootElement);