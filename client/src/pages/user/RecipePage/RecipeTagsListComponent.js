import React from 'react';

const RecipeTagsListComponent = () => {
  return (
    <>
      <h3 className="uk-margin-large-top">Tags</h3>
      <div className="uk-margin-medium-top" data-uk-margin>
        <a className="uk-display-inline-block" href="#"><span className="uk-label uk-label-light">dinner</span></a>
        <a className="uk-display-inline-block" href="#"><span
          className="uk-label uk-label-light">casserole</span></a>
        <a className="uk-display-inline-block" href="#"><span
          className="uk-label uk-label-light">party</span></a>
        <a className="uk-display-inline-block" href="#"><span
          className="uk-label uk-label-light">meat</span></a>
      </div>
    </>
  );
};

export default RecipeTagsListComponent;
