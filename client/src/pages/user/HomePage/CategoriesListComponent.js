import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategoriesRequest } from 'Src/actions/categoryActions';

const CategoriesListComponent = () => {
  const categories = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategoriesRequest());
  }, []);

  return (
    <div className="uk-width-1-4@m sticky-container">
      <div data-uk-sticky="offset: 100; bottom: true; media: @m;">
        <h2>Categories</h2>
        <ul className="uk-nav-default uk-nav-parent-icon uk-nav-filter uk-margin-medium-top" data-uk-nav>
          {
            categories?.map((category, categoryIndex) => (
              <li className="uk-parent" key={categoryIndex}>
                <a href="#">{category?.name}</a>
                <ul className="uk-nav-sub">
                  {
                    category?.childCategories?.map((childCategory, childCategoryIndex) => (
                      <li key={`${categoryIndex} - ${childCategoryIndex}`}>
                        <a href="#">{childCategory?.name}</a>
                      </li>
                    ))
                  }
                </ul>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  );
};

export default CategoriesListComponent;
