import { combineReducers } from 'redux';
import user from './user/user';

const appReducer = combineReducers({
	user
});

export default appReducer;
