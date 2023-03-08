import React from 'react';
import {useSelector} from 'react-redux';

const RecipeIntroComponent = () => {
  const recipe = useSelector((state) => state.recipe);

  return (
    <div className="uk-container">
      <div data-uk-grid>
        <div className="uk-width-1-2@s">
          <div>
            <img
              className="uk-border-rounded-large"
              src={recipe?.image}
              alt={recipe?.title}
            />
          </div>
        </div>

        <div className="uk-width-expand@s uk-flex uk-flex-middle">
          <div>
            <h1>{recipe?.title}</h1>
            <p>{recipe?.description}</p>
            <div className="uk-margin-medium-top uk-child-width-expand uk-text-center uk-grid-divider" data-uk-grid>
              <div>
                <span data-uk-icon="icon: clock; ratio: 1.4"></span>
                <h5 className="uk-text-500 uk-margin-small-top uk-margin-remove-bottom">Prepare Time</h5>
                <span className="uk-text-small">{recipe?.prepare_time} mins</span>
              </div>

              <div>
                <span data-uk-icon="icon: future; ratio: 1.4"></span>
                <h5 className="uk-text-500 uk-margin-small-top uk-margin-remove-bottom">Total Time</h5>
                <span className="uk-text-small">{recipe?.total_time} mins</span>
              </div>

              <div>
                <span data-uk-icon="icon: users; ratio: 1.4"></span>
                <h5 className="uk-text-500 uk-margin-small-top uk-margin-remove-bottom">Yield</h5>
                <span className="uk-text-small">Serves {recipe.number_persons}</span>
              </div>
            </div>

            <hr />

            <div data-uk-grid>
              <div className="uk-width-auto@s uk-text-small">
                <p className="uk-margin-small-top uk-margin-remove-bottom">
                  Created by Alex Williamns
                </p>
                <span className="uk-text-muted">21 recipes</span>
              </div>

              <div className="uk-width-expand@s uk-flex uk-flex-middle uk-flex-right@s">
                <a
                  href="#"
                  className="uk-icon-link"
                  data-uk-icon="icon: plus-circle; ratio: 1.2"
                  data-uk-tooltip="title: Save Recipe"
                ></a>
                <a
                  href="#"
                  className="uk-icon-link uk-margin-left"
                  data-uk-icon="icon: cart; ratio: 1.2"
                  data-uk-tooltip="title: Shopping List"
                ></a>
                <a
                  href="#"
                  className="uk-icon-link uk-margin-left"
                  data-uk-icon="icon: print; ratio: 1.2"
                  data-uk-tooltip="title: Print Recipe"
                ></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeIntroComponent;
