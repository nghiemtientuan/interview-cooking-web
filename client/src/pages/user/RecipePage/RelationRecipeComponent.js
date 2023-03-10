import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

// actions
import {fetchRelationRecipesRequest} from 'Src/actions/recipesActions';
import {pathUrl} from "Src/routes/routes";

const RelationRecipeComponent = (props) => {
  const {recipeId} = props;
  const dispatch = useDispatch();

  const relationRecipes = useSelector((state) => state.relationRecipes);

  useEffect(() => {
    dispatch(fetchRelationRecipesRequest(recipeId));
  }, []);

  return (
    <div className="uk-section uk-section-muted">
      <div className="uk-container">
        <h3>Other Recipes You May Like</h3>
        <div
          className="uk-child-width-1-2 uk-child-width-1-3@s uk-child-width-1-4@m uk-margin-medium-top"
          data-uk-grid
        >
          {
            relationRecipes?.map((relationRecipe, relationRecipeIndex) => (
              <div key={relationRecipeIndex}>
                <div className="uk-card">
                  <div className="uk-card-media-top uk-inline uk-light">
                    <img
                      className="uk-border-rounded-medium"
                      src={relationRecipe?.image}
                      alt={relationRecipe?.title}
                    />
                    <div className="uk-position-cover uk-card-overlay uk-border-rounded-medium"></div>
                    <div className="uk-position-xsmall uk-position-top-right">
                      <a
                        href="#"
                        className="uk-icon-button uk-like uk-position-z-index uk-position-relative"
                        data-uk-icon="heart"
                      ></a>
                    </div>
                  </div>

                  <div>
                    <h3 className="uk-card-title uk-text-500 uk-margin-small-bottom uk-margin-top">
                      {relationRecipe?.title}
                    </h3>
                    <div className="uk-text-xsmall uk-text-muted" data-uk-grid>
                      <div className="uk-width-auto uk-flex uk-flex-middle">
                        <span className="uk-rating-filled" data-uk-icon="icon: star; ratio: 0.7"></span>
                        <span className="uk-margin-xsmall-left">5.0</span>
                      </div>

                      <div className="uk-width-expand uk-text-right">by Tuntun</div>
                    </div>
                  </div>

                  <a href={`${pathUrl.user.RecipePage}/${relationRecipe?.id}`} className="uk-position-cover"></a>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default RelationRecipeComponent;
