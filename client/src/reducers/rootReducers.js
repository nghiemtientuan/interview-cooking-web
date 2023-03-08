import { combineReducers } from 'redux';
import tasks from './tasks';
import categories from './categories';
import videos from './videos';
import recipes from './recipes';
import recipe from './recipe';

const rootReducer = combineReducers({
  tasks,
  categories,
  videos,
  recipes,
  recipe,
});

export default rootReducer;
