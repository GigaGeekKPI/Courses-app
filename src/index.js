import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import './index.css';
import App from './App';

let store = createStore(rootReducer);
const sub = store.subscribe(() => console.log(store.getState()));
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
, document.getElementById('root'));
sub();