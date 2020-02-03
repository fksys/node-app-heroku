import 'materialize-css/dist/css/materialize.min.css';
import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import App from './components/App';
import { reducers } from './reducers';

const initialState = {};
const store = createStore(
  reducers,
  initialState,
  compose(applyMiddleware(thunk, logger))
);
ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root')
);

console.log('STRIPE KEY IS', process.env.REACT_APP_STRIPE_KEY);
console.log('ENVIREMONMENT IS', process.env.NODE_ENV);
