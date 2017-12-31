import uuid from 'uuid';

export const ADD_COMMENT = 'ADD_COMMENT';
export const DELETE_COMMENT = 'DELETE_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';
export const LIKE_COMMENT = 'LIKE_COMMENT';
export const DISLIKE_COMMENT = 'DISLIKE_COMMENT';

export function addComment(comment) {
    return (dispatch,getState) => {
        const state = getState();
        dispatch({
            type: ADD_COMMENT,
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
            type: EDIT_COMMENT,
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
            type: DELETE_COMMENT,
            data: {
                id: 1
            }
        });
    };
};

export function likeComment(comment) {
    return (dispatch, getState) => {
        const state = getState();
        dispatch({
            type: LIKE_COMMENT,
            data: {
                id: 1,
                votes: 24
            }
        });
    };
};

export function dislikeComment(comment) {
    return (dispatch, getState) => {
        const state = getState();
        dispatch({
            type: DISLIKE_COMMENT,
            data: {
                id: 1,
                votes: 22
            }
        });
    };
};
