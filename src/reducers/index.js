import cart from './cart';
import count from './CountReducer';
import menu from './menu';
import { combineReducers } from 'redux';
const rootReducer = combineReducers({
  cart,
  count,
  menu
});
export default rootReducer;
