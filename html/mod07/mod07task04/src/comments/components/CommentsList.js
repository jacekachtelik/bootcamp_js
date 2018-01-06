import React, {Component} from 'react';
import Comment from './Comment';

const CommentList = (props) => {
    console.log('Props na ul',props);
    return(
        <ul>{props.comments.map(comment => <Comment key={comment.id} {...comment} delete={props.delete} />)}</ul>
    );
};
export default CommentList;

