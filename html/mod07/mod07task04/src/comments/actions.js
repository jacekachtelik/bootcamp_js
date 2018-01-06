export const NAME = 'comments';
export const ADD_COMMENT = 'add';
export const DELETE_COMMENT = 'delete';
export const EDIT_COMMENT = 'edit';
export const LIKE = 'like';
export const DISLIKE = 'dislike';

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
            type: LIKE,
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
            type: DISLIKE,
            data: {
                id: 1,
                votes: 22
            }
        });
    };
};