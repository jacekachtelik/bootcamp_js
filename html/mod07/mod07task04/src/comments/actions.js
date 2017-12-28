import { ADD, EDIT, DELETE } from "./actionTypes";

export function addComment(comment) {
    return (dispatch,getState) => {
            const state = getState();
            dispatch({
                type: ADD,
                data: {
                    id: 1,
                    text: 'Przykładowy komentarz',
                    votes: 23
                }
            });
        };
};

export function editComment(comment) {
    return (dispatch,getState) => {
            const state = getState();
            dispatch({
                type: EDIT,
                data: {
                    id: 1, // comments.id
                    text: 'Przykładowy komentarz', //comments.text
                    votes: 23 // comments.votes
                }
            });
        };
};

export function deleteComment(comment) {
    return (dispatch) => {
        dispatch({
            type: DELETE,
            data: {
                id: 1
            }
        });
    };
};


