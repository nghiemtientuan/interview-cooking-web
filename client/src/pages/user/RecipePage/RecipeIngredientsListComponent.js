import React from 'react';
import {useSelector} from 'react-redux';

// routers
import {pathUrl} from 'Src/routes/routes';

const RecipeIngredientsListComponent = () => {
  const {user: userAuth} = useSelector((state) => state.auth);
  const recipe = useSelector((state) => state.recipe);

  return (
    <>
      <h3>Ingredients</h3>
      <ul className='uk-list uk-list-large uk-list-divider uk-margin-medium-top'>
        {
          recipe?.recipeIngredients?.map((ingredient, ingredientIndex) => (
            <li key={ingredientIndex}>{ingredient?.name}: {ingredient?.quantity} {ingredient?.unit}</li>
          ))
        }
        {
          !userAuth && (
            <li key='login-to-continue'>
              <a href={pathUrl.user.SignIn}>{`<< Show more >> `}</a>
            </li>
          )
        }
      </ul>
    </>
  );
};

export default RecipeIngredientsListComponent;
