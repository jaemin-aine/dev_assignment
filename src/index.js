// Client-side 진입하는 부분

import React from 'react';
import ReactDOM from 'react-dom';
// import { Router, Route} from 'react-router';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import { createBrowserHistory } from 'history'
import App from 'containers/App';
import {Home, Login, Register } from 'containers';

// Redux
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from 'reducers';
import thunk from 'redux-thunk';
const store = createStore(reducers, applyMiddleware(thunk));

var browserHistory = createBrowserHistory();

const rootElement = document.getElementById('root');

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <div>
                {/* some things can be done here */}
                <Switch>
                    <Route exact path="/" component={App}/>
                    <Route exact path="/" component={Home}/>
                    <Route path="/home" component={Home}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/register" component={Register}/>     
                </Switch>
            </div>

        </BrowserRouter>
    </Provider>, rootElement
);