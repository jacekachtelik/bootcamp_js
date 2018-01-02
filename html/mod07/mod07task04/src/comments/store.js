import { createStore } from 'redux';
function devBuildOnly(args) {
    return args;
  }
import reducer from './reducer';

const store = createStore(reducer,
    devBuildOnly(window.devToolsExtension ? window.devToolsExtension() : f => f));
export default store;