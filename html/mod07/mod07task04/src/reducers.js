import { combineReducers } from "redux";
import * as comments from "./comments";

const appReducer = combineReducers({
    [comments.NAME]: comments.reducer
});

// Tutaj obsługa np. logout, login

const rootReducer = (state, action) => {
    return appReducer(state, action);
};
export default rootReducer;