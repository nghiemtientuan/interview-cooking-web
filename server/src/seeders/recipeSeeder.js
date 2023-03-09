import {dataConnection} from '../config/database';

// entities
import {Recipe} from '../entities/Recipe';
import {RecipeIngredient} from '../entities/RecipeIngredient';
import {RecipeStep} from '../entities/RecipeStep';
import {RecipeComment} from '../entities/RecipeComment';
import {RecipeTag} from '../entities/RecipeTag';

const recipes = [
  {
    title: 'Món chính',
    sub: [
      'Cơm',
      'Gà',
      'Bò',
      'Cá',
      'Món chay',
    ],
  },
]

export const recipeSeeder = async () => {
  const recipeRepo = dataConnection.getRepository(Recipe);
  const recipeIngredientRepo = dataConnection.getRepository(RecipeIngredient);
  const recipeStepRepo = dataConnection.getRepository(RecipeStep);
  const recipeCommentRepo = dataConnection.getRepository(RecipeComment);
  const recipeTagRepo = dataConnection.getRepository(RecipeTag);

  for (let item of recipes) {
    const recipe = new Recipe();
    recipe.title = item.title;
    const recipeDB = await recipeRepo.save(recipe);
  }
};
