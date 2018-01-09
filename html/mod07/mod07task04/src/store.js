import { createStore } from "redux";
import rootReducer from './reducers';
function devBuildOnly(args) {
    return args;
}

const store = createStore(rootReducer,
    devBuildOnly(window.devToolsExtension ? window.devToolsExtension() : f => f));

store.subscribe(() => console.log(store.getState()))

export default store;