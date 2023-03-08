import { combineReducers } from 'redux';
import tasks from './tasks';
import categories from './categories';
import videos from './videos';
import recipes from './recipes';

const rootReducer = combineReducers({
  tasks,
  categories,
  videos,
  recipes,
});

export default rootReducer;
