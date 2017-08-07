import { combineReducers } from 'redux';
import UserReducer from './reducer_users';


const rootReducer = combineReducers({
  users: UserReducer,
});

export default rootReducer;
