import { combineReducers } from 'redux';
import comments from './comments/comments.js';
import users from './users/users.js';

const reducer = combineReducers({
  comments,
  users
});
export default reducer;