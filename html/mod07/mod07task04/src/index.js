import React, { PropTypes } from 'react';
import { render } from 'react-dom';
import { connect, Provider } from 'react-redux';
import store from './store';
import CommentsListContainer from './comments/components/CommentsListContainer';

render(
  <Provider store={store}>
    <CommentsListContainer />
  </Provider>
  , document.getElementById('app')
);

