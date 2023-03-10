import { combineReducers } from 'redux';
import categories from './categories';
import videos from './videos';
import recipes from './recipes';
import recipe from './recipe';

const rootReducer = combineReducers({
  categories,
  videos,
  recipes,
  recipe,
});

export default rootReducer;
