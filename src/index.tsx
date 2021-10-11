import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import './index.scss';
import { store } from './store';
import * as serviceWorker from './serviceWorker';

import Pages from './pages';

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Pages />
        </Router>
    </Provider>,
    document.getElementById('root')
);

serviceWorker.unregister();
