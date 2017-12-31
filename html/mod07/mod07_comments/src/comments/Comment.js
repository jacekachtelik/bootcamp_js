import React from 'react';

const Comment = ({text, votes, id, likeComment}) => <li>{text} <span>{votes}</span><button onClick={() => likeComment(id)}>Like !</button></li>;
export default Comment;