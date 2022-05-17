import {combineReducers} from 'redux';
import routeSlice from './routeSlice';
import userSlice from './userSlice';
export const rootReducer = combineReducers({
  user: userSlice,
  route: routeSlice,
});
