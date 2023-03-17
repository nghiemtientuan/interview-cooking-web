import React from 'react';
import {useSelector} from 'react-redux';

import {pathUrl} from 'Src/routes/routes';

// components
import RecipeSingleCommentComponent from 'Src/pages/user/RecipePage/RecipeSingleCommentComponent';

const RecipeCommentsComponent = () => {
  const {user: userAuth} = useSelector((state) => state.auth);
  const recipe = useSelector((state) => state.recipe);

  const {recipeComments} = recipe;

  return (
    <>
      <h3>Comments</h3>
      <ul className='uk-comment-list uk-margin-medium-top'>
        {
          recipeComments && recipeComments.length
            ? recipeComments?.map((comment, commentIndex) => (
              <RecipeSingleCommentComponent key={commentIndex} comment={comment}/>
            )) : (
              <li key='no-comments'>No comment</li>
            )
        }
        {
          userAuth ? (
            <RecipeSingleCommentComponent key='create-new-comment' comment={null}/>
          ) : (
            <li key='login-to-comment'>
              <a href={pathUrl.user.SignIn}>{`<< Login to comment >>`}</a>
            </li>
          )
        }
      </ul>
    </>
  );
};

export default RecipeCommentsComponent;
