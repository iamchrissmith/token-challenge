import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { combineReducers, createStore, compose, applyMiddleware } from 'redux'
import './index.css';
import App from './App';
import sampleReducer from './reducers/sample';
import registerServiceWorker from './registerServiceWorker';

const middleware = []

const store = createStore(
  combineReducers({
    sampleReducer
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__
    ? compose(applyMiddleware(...middleware), window.__REDUX_DEVTOOLS_EXTENSION__())
    : compose(applyMiddleware(...middleware))
)

ReactDOM.render(
<Provider store={store}>
  <App />
</Provider>, document.getElementById('root'));
registerServiceWorker();
