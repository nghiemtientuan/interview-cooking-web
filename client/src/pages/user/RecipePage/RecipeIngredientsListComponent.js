import React from 'react';
import {useSelector} from 'react-redux';

const RecipeIngredientsListComponent = () => {
  const recipe = useSelector((state) => state.recipe);

  return (
    <>
      <h3>Ingredients</h3>
      <ul className="uk-list uk-list-large uk-list-divider uk-margin-medium-top">
        {
          recipe?.recipeIngredients?.map((ingredient, ingredientIndex) => (
            <li key={ingredientIndex}>{ingredient?.name}: {ingredient?.quantity} {ingredient?.unit}</li>
          ))
        }
      </ul>
    </>
  );
};

export default RecipeIngredientsListComponent;
