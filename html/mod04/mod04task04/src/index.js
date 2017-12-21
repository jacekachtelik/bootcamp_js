import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';

var todo = [{
    id: 1,
    title: 'Cleaning',
    description: 'clean room'
}, {
    id: 2,
    title: 'Dishes :-(',
    description: 'wash the dishes'
}, {
    id: 3,
    title: 'Cat feeding',
    description: 'feed my cat'
}];

ReactDOM.render(
    <App todo = {todo}/>,
    document.getElementById('app')
);
