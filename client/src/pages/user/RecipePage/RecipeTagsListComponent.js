import React from 'react';
import {useSelector} from 'react-redux';
import {css} from '@emotion/react';

const tagStyle = css`
  margin-right: 10px;
`;

const RecipeTagsListComponent = () => {
  const recipe = useSelector((state) => state.recipe);

  return (
    <>
      <h3 className="uk-margin-large-top">Tags</h3>
      <div className="uk-margin-medium-top" data-uk-margin>
        {
          recipe?.recipeTags?.map((tag, tagIndex) => (
            <a className="uk-display-inline-block" key={tagIndex} css={tagStyle}>
              <span className="uk-label uk-label-light">{tag?.content}</span>
            </a>
          ))
        }
      </div>
    </>
  );
};

export default RecipeTagsListComponent;
