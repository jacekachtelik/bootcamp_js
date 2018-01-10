import uuid from 'uuid';

export const NAME = 'comments';
export const ADD_COMMENT = 'ADD_COMMENT';
export const DELETE_COMMENT = 'DELETE_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';
export const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';
export const THUMB_DOWN_C0MMENT = 'THUMB_DOWN_C0MMENT';

// Funkcja nie zaimplementowana
function addComment(text) {
    return {
      type: ADD_COMMENT,
      id: uuid.v4(),
      text: text
    }
}

// Funkcja nie zaimplementowana
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

export function deleteComment(commentId) {
    return {
        type: DELETE_COMMENT,
        id: commentId
    };
};

export function thumbUpComment(commentId) {
    return {
        type: THUMB_UP_COMMENT,
        id: commentId
      }
};

export function thumbDownComment(commentId) {
    return {
        type: THUMB_DOWN_C0MMENT,
        id: commentId
      }
};