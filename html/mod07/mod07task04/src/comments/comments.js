import { ADD_COMMENT, EDIT_COMMENT, DELETE_COMMENT, LIKE, DISLIKE, THUMB_UP_COMMENT, THUMB_DOWN_C0MMENT } from "./actions";
import commentsData from './comments.json';

// Sekcja users powinna być wystawiona do innego reducera.
// Reducer dot. komentarzy
const comments = (state = commentsData, action) => {
    switch (action.type) {
        case ADD_COMMENT:
            return [{
                id: action.id,
                text: action.text,
                votes: 0
            }
            , ...state];
        case DELETE_COMMENT:
            return state.filter(comment => comment.id !== action.id);
        case EDIT_COMMENT:
            return Object.assign({}, state, {
                comments: state.comments.map(editComment.bind(this,action.text))
            });
        case THUMB_UP_COMMENT:
            return state.map(comment => {
                console.log('Comment',comment);
                if(comment.id === action.id) {
                return {...comment, votes: comment.votes + 1}
                }
            return comment;
            });
        case THUMB_DOWN_C0MMENT:
            return state.map(comment => {
                console.log('Comment',comment);
                if(comment.id === action.id) {
                return {...comment, votes: comment.votes - 1}
            }
        return comment;
        }); 
        default:
            return state;
    }
};
export default comments;

