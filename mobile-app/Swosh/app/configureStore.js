import { createStore, applyMiddleware } from 'redux';
import app from './reducers';
import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise';

const middleWare = [thunk, promiseMiddleware];

export default () => {
  let store = createStore(app, applyMiddleware(...middleWare));
  return  store;
}