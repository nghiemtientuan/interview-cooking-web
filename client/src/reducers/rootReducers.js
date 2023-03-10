import { combineReducers } from 'redux';
import categories from './categories';
import videos from './videos';
import recipes from './recipes';
import relationRecipes from './relationRecipes';
import recipe from './recipe';

const rootReducer = combineReducers({
  categories,
  videos,
  recipes,
  relationRecipes,
  recipe,
});

export default rootReducer;
