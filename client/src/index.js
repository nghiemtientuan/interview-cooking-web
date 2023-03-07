import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './reducers/rootReducers';
import rootSaga from './saga/rootSaga';

const root = ReactDOM.createRoot(document.getElementById('root'));
const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(sagaMiddleware)
));
sagaMiddleware.run(rootSaga);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
