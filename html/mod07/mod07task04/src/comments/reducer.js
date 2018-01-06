import { ADD_COMMENT, EDIT_COMMENT, DELETE_COMMENT, LIKE, DISLIKE } from "./actions";
import comments from './comments.json';
import users from './users.json';


const initialState = {
    comments: comments,
    users: users,
};
// Sekcja users powinna być wystawiona do innego reducera.
// Reducer dot. komentarzy
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_COMMENT:
            return Object.assign({}, state, {
                comments: [
                {
                    id: action.data.id,
                    text: action.data.text,
                    votes: 0
                }
                , ...state]
            });
        case DELETE_COMMENT:
            return Object.assign({}, state, {
                comments: state.comments.filter(comment => comment.id !== action.data.id)
            });
        case EDIT_COMMENT:
            return Object.assign({}, state, {
                // comments: state.comments.map(comment => editComment(comment, action.data))
                comments: state.comments.map(editComment.bind(this,action.data))
                // bind(action.data, comment)
            });
        case LIKE:
            return Object.assign({}, state, {
                comments: state.comments.map(addVote.bind(this,action.data.id))
            });
        case DISLIKE:
            return Object.assign({}, state, {
                comments: state.comments.map(removeVote.bind(this,action.data.id))
            }); 
        default:
            return state;
    }
};
export default reducer;

function editComment(data, comment) {
    if (comment.id === data.id) {
        return data;
    }        
    return comment;
};

function addVote(id,comment) {
    if (comment.id === id) {
        comment.votes++;
    }        
    return comment;
}

function removeVote(id,comment) {
    if (comment.id === id) {
        comment.votes--;
    }        
    return comment;
}
