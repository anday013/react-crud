import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import reducers from './store/reducers'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'

const rootReducer = combineReducers({
  list: reducers.listReducer
})

const logger = store => next => action =>{
  console.log('[Middleware] dispatching ', action)
  const result = next(action)
  console.log('[Middleware] next state ', store.getState())
  return result
}
const store = createStore(rootReducer, applyMiddleware(logger));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store} >
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
