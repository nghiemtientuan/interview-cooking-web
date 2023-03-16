import { combineReducers } from 'redux';
import categories from './categories';
import videos from './videos';
import recipes from './recipes';
import relationRecipes from './relationRecipes';
import recipe from './recipe';
import auth from './auth';

const rootReducer = combineReducers({
  categories,
  videos,
  recipes,
  relationRecipes,
  recipe,
  auth,
});

export default rootReducer;
