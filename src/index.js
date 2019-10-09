import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import './index.css';
import Game from './Game';
import * as serviceWorker from './serviceWorker';

import myReducer from './reducers/index';

const store =createStore(myReducer);
ReactDOM.render(
    <Provider store = {store}>
        <Game />
    </Provider>, document.getElementById('root'));

serviceWorker.unregister();
