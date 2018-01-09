import { combineReducers } from "redux";
import comments from "./comments/comments";
// import usersReducer from "./users/users";

const appReducer = combineReducers({
    comments,
    // usersReducer
});

// Tutaj obsługa np. logout, login

const rootReducer = (state, action) => {
    return appReducer(state, action);
};
export default rootReducer;