import React from 'react';
import {useSelector} from 'react-redux';

// components
import PaginationComponent from 'Src/components/PaginationComponent';
import FilterComponent from './FilterComponent';

// utils
import {pathUrl} from 'Src/routes/routes';

const SearchResultComponent = (props) => {
  const recipes = useSelector((state) => state.recipes);
  const {setFilter} = props;

  return (
    <div className="uk-width-expand@m">
      <FilterComponent setFilter={setFilter}/>

      <div className="uk-child-width-1-2 uk-child-width-1-3@s" data-uk-grid>
        {
          recipes?.data?.map((recipe, recipeIndex) => (
            <div key={recipeIndex}>
              <div className="uk-card">
                <div className="uk-card-media-top uk-inline uk-light">
                  <img
                    className="uk-border-rounded-medium"
                    src={recipe?.image}
                    alt={recipe?.title}
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
                  <h3
                    className="uk-card-title uk-text-500 uk-margin-small-bottom uk-margin-top"
                  >{recipe?.title}</h3>
                  <div className="uk-text-xsmall uk-text-muted" data-uk-grid>
                    <div className="uk-width-auto uk-flex uk-flex-middle">
                      <span className="uk-rating-filled" data-uk-icon="icon: star; ratio: 0.7"></span>
                      <span className="uk-margin-xsmall-left">5/5</span>
                    </div>

                    <div className="uk-width-expand uk-text-right">by John Keller</div>
                  </div>
                </div>

                <a href={`${pathUrl.user.RecipePage}/${recipe.id}`} className="uk-position-cover"></a>
              </div>
            </div>
          ))
        }
      </div>

      <PaginationComponent/>
    </div>
  );
};

export default SearchResultComponent;
