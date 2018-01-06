import React, {Component} from 'react';
// import './Comment.css';

const Comment = (props) => {
    console.log('props na elemencie listy',props);
    return(
        <li className="list-element">
            <div>{props.text}</div><br />
            <div>Liczba głosów:<span>{props.votes}</span></div><br />
            <div>
                <input type="button" className="list-element-delete-button" onClick={e => props.delete(props.id)} value="Usuń" />
            </div>
        </li>
    );
};
export default Comment;