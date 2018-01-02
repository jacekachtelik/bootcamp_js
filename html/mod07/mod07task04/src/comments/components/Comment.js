import React, {Component} from 'react';
// import { createStore } from 'redux';
// import { connect, Provider } from 'react-redux';
// import './Comment.css';

const Comment = ({text, votes}) => <li>{text} <span>{votes}</span></li>;
export default Comment;