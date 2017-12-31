import { createStore, combineReducers } from 'redux';
import reducer from './reducer';
import DevTools from './DevTools';

const store = createStore(
  reducer,
  DevTools.instrument()
);
export default store;