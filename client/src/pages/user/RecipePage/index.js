import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';

// components
import HeaderComponent from '../../../components/HeaderComponent';
import FooterComponent from '../../../components/FooterComponent';
import RelationRecipeComponent from './RelationRecipeComponent';
import RecipeIntroComponent from './RecipeIntroComponent';
import RecipeStepsListComponent from './RecipeStepsListComponent';
import RecipeIngredientsListComponent from './RecipeIngredientsListComponent';
import RecipeTagsListComponent from './RecipeTagsListComponent';
import RecipeShareComponent from './RecipeShareComponent';
import RecipeCommentsComponent from './RecipeCommentsListComponent';

// actions
import {fetchSingleRecipeRequest} from 'Src/actions/recipeActions';

const RecipePage = (props) => {
  const {params} = props.match;
  const {id} = params;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSingleRecipeRequest(id));
  }, []);

  return (
    <>
      <HeaderComponent />

      <RecipeIntroComponent />

      <div className="uk-section uk-section-default">
        <div className="uk-container uk-container-small">
          <div className="uk-grid-large" data-uk-grid>
            <div className="uk-width-expand@m">
              <div className="uk-article">
                <RecipeStepsListComponent />

                <hr className="uk-margin-medium-top uk-margin-large-bottom" />

                <RecipeCommentsComponent />
              </div>
            </div>

            <div className="uk-width-1-3@m">
              <RecipeIngredientsListComponent />

              <RecipeTagsListComponent />

              <RecipeShareComponent />
            </div>
          </div>
        </div>
      </div>

      <RelationRecipeComponent />

      <FooterComponent />
    </>
  );
};

export default RecipePage;
