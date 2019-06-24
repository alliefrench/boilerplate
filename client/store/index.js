import { createStore, applyMiddleware } from 'redux';
import Users from './users';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

const store = createStore(
  Users,
  applyMiddleware(thunkMiddleware, createLogger())
);

export default store;
