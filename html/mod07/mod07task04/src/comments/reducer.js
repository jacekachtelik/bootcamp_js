import { ADD, EDIT, DELETE } from "./actionTypes";

const initialState = {
    comments: [
        {
            id: 1,
            text: 'komentarz testowy',
            votes: 23
        },
        {
            id: 2,
            text: 'komentarz testowy 2',
            votes: 12
        }
    ]
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD:
            return Object.assign({}, state, {
                comments: [
                {
                    id: action.data.id,
                    text: action.data.text,
                    votes: 0
                }
                , ...state]
            });
        case DELETE:
            return Object.assign({}, state, {
                comments: state.comments.filter(comment => comment.id !== action.data.id)
            });
        case EDIT:
            return Object.assign({}, state, {
                // comments: state.comments.map(comment => editComment(comment, action.data))
                comments: state.comments.map(editComment.bind(this,action.data))
                // bind(action.data, comment)
            });
        // case LIKE:
        //     return Object.assign({}, state, {
        //         comments: state.comments.map(addVote.bind(this,action.data.id))
        //     });
        // case 'DISLIKE':
        //     return { ...state, counter: state.counter - 1 };            
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
