import React from 'react';

const FilterComponent = () => {
  return (
    <div data-uk-grid>
      <div className="uk-width-expand@m">
        <form className="uk-search uk-search-default uk-width-1-1">
          <span data-uk-search-icon></span>
          <input
            className="uk-search-input uk-text-small uk-border-rounded uk-form-large"
            type="search"
            placeholder="Search for recipes..."
          />
        </form>
      </div>

      <div className="uk-width-1-3@m uk-text-right@m uk-light">
        <select className="uk-select uk-select-light uk-width-auto uk-border-pill uk-select-primary">
          <option>Sort by: Latest</option>
          <option>Sort by: Top Rated</option>
          <option>Sort by: Trending</option>
        </select>
      </div>
    </div>
  );
};

export default FilterComponent;
