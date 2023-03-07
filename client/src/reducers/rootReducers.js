import { combineReducers } from 'redux';
import tasks from './tasks';
import categories from './categories';

const rootReducer = combineReducers({
  tasks,
  categories
});

export default rootReducer;
