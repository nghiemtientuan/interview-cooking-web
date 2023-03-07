import { combineReducers } from 'redux';
import tasks from './tasks';
import categories from './categories';
import videos from './videos';

const rootReducer = combineReducers({
  tasks,
  categories,
  videos,
});

export default rootReducer;
