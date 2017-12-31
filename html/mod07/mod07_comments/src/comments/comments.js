import { ADD_COMMENT, EDIT_COMMENT, DELETE_COMMENT, LIKE_COMMENT, DISLIKE_COMMENT } from "./actions";

const initialState = {
    comments: [
        {
            id: '12741danx1278',
            text: 'komentarz testowy',
            votes: 23
        },
        {
            id: '12741danb1278',
            text: 'komentarz testowy 2',
            votes: 12
        }
    ],
    users: [
        {
            id: '121jk6d89h2d',
            firstName: 'Jacek',
            lastName: 'Achtelik',
            comments: [
                '12741danb1278'
            ]
        }
    ]
};

// Reducer dot. komentarzy
const comments = (state = initialState, action) => {
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
                comments: state.comments.map(editComment.bind(this,action.data))
            });
        case LIKE_COMMENT:
            return Object.assign({}, state, {
                comments: state.comments.map(addVote.bind(this,action.data.id))
            });
        case DISLIKE_COMMENT:
            return Object.assign({}, state, {
                comments: state.comments.map(removeVote.bind(this,action.data.id))
            });      
        default:
            return state;
    }
};
export default comments;

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