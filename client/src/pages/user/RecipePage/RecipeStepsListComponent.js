import React from 'react';
import {useSelector} from 'react-redux';

const RecipeStepsListComponent = () => {
  const recipe = useSelector((state) => state.recipe);

  return (
    <>
      <h3>How to Make It</h3>
      {
        recipe?.recipeSteps?.map((step, stepIndex) => (
          <div id={`step-${stepIndex + 1}`} className="uk-grid-small uk-margin-medium-top" data-uk-grid>
            <div className="uk-width-auto">
              <a
                className="uk-step-icon"
                data-uk-icon="icon: check; ratio: 0.8"
                data-uk-toggle={`target: #step-${stepIndex + 1}; cls: uk-step-active`}
              ></a>
            </div>

            <div className="uk-width-expand">
              <h5
                className="uk-step-title uk-text-500 uk-text-uppercase uk-text-primary"
                data-uk-leader="fill:—"
              >{stepIndex + 1}. Step</h5>
              <div className="uk-step-content">{step?.content}</div>
            </div>
          </div>
        ))
      }
    </>
  );
};

export default RecipeStepsListComponent;
