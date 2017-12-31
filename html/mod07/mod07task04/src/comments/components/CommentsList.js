import React, {Component} from 'react';
// import { createStore } from 'redux';
// import { connect, Provider } from 'react-redux';
import Comment from './Comment';

const CommentList = ({comments}) => <ul>{comments.map(comment => <Comment key={comment.id} {...comment} />)}</ul>;
export default CommentList;

