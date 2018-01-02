import { combineReducers } from "redux";
import { reducer as commentsReducer } from "./comments/reducer";

const appReducer = combineReducers({
    commentsReducer
});

// Tutaj obsługa np. logout, login

const rootReducer = (state, action) => {
    return appReducer(state, action);
};
export default rootReducer;