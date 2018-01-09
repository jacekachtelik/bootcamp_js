import React, {Component} from 'react';
import Comment from './CommentContainter';

const CommentList = (props) => {
    console.log('Props na ul',props);
    return(
        <ul>{props.comments.comments.map(comment => <Comment key={comment.id} {...comment} />)}</ul>
    );
};
export default CommentList;

