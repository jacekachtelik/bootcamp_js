import React, { PropTypes } from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { connect, Provider } from 'react-redux';
import { rootReducer as reducers } from "./reducers";
import { Container as CommentsContainer } from './comments';

function devBuildOnly(args) {
  return args;
}
 
let store = createStore(
  reducers,
  devBuildOnly(window.devToolsExtension ? window.devToolsExtension() : f => f)
);

render(
  <Provider store={store}>
    <CommentsContainer />
  </Provider>
  , document.getElementById('app')
);
