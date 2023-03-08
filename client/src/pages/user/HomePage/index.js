import React, {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';

// actions
import {fetchRecipesRequest} from 'Src/actions/recipesActions';

// components
import HeaderComponent from 'Src/components/HeaderComponent';
import FooterComponent from 'Src/components/FooterComponent';
import SubscribeComponent from './SubscribeComponent';
import VideosComponent from './VideosComponent';
import SlideComponent from './SlideComponent';
import CategoriesListComponent from './CategoriesListComponent';
import SearchResultComponent from './SearchResultComponent';

const HomePage = (_props) => {
  const dispatch = useDispatch();

  const [filter, setFilter] = useState({
    keyword: '',
    subCategory: null,
  });

  useEffect(() => {
    dispatch(fetchRecipesRequest(filter));
  }, []);

  return (
    <>
      <HeaderComponent />
      <SlideComponent />

      <div className="uk-section uk-section-default">
        <div className="uk-container">
          <div data-uk-grid>
            <CategoriesListComponent setFilter={setFilter}/>

            <SearchResultComponent setFilter={setFilter}/>
          </div>
        </div>
      </div>

      <VideosComponent />
      <SubscribeComponent />
      <FooterComponent />
    </>
  );
};

export default HomePage;
