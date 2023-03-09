import React from 'react';

const FilterComponent = (props) => {
  const {filter, setFilter, handleSearch} = props;

  const onChange = (e) => {
    const {target} = e;
    const {value} = target;

    setFilter({
      ...filter,
      keyword: value,
    })
  };

  return (
    <div data-uk-grid>
      <div className="uk-width-expand@m">
        <form className="uk-search uk-search-default uk-width-1-1">
          <span data-uk-search-icon></span>
          <input
            className="uk-search-input uk-text-small uk-border-rounded uk-form-large"
            type="search"
            placeholder="Search for recipes..."
            onChange={onChange}
            value={filter.keyword}
          />
        </form>
      </div>

      <div className="uk-width-1-3@m uk-text-right@m uk-light">
        <button
          className="uk-select uk-select-light uk-width-auto uk-border-pill uk-select-primary"
          onClick={() => handleSearch()}
        >search</button>
      </div>
    </div>
  );
};

export default FilterComponent;
