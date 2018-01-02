import React, { PropTypes } from 'react';
import { render } from 'react-dom';
import { connect, Provider } from 'react-redux';
import store from './comments/store';
import CommentsContainer from './comments/components/CommentsContainter';

render(
  <Provider store={store}>
    <CommentsContainer />
  </Provider>
  , document.getElementById('app')
);
