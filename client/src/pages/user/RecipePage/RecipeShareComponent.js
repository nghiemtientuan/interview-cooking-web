import React from 'react';

const RecipeShareComponent = () => {
  return (
    <>
      <h3 className="uk-margin-large-top">Share Recipe</h3>
      <div className="uk-margin-medium-top">
        <div data-uk-grid className="uk-child-width-auto uk-grid-small">
          <div>
            <a href="#" data-uk-icon="icon: facebook; ratio: 0.9" className="uk-icon-button facebook"
               target="_blank"></a>
          </div>
          <div>
            <a href="#" data-uk-icon="icon: linkedin; ratio: 0.9" className="uk-icon-button linkedin"
               target="_blank"></a>
          </div>
          <div>
            <a href="#" data-uk-icon="icon: twitter; ratio: 0.9" className="uk-icon-button twitter"
               target="_blank"></a>
          </div>
        </div>
      </div>
    </>
  );
};

export default RecipeShareComponent;
