import React from 'react';

const Comment = ({text, votes, id, likeComment, dislikeComment}) => {
    <li>{text} 
        <span>{votes}</span>
        <button onClick={() => likeComment(id)}>Like !</button>
        <button onClick={() => dislikeComment(id)}>Dislike !</button>
    </li>;
}
export default Comment;