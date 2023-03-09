import React from 'react';

const PaginationComponent = () => {
  return (
    <div className="uk-margin-large-top uk-text-small">
      <ul className="uk-pagination uk-flex-center uk-text-500 uk-margin-remove" data-uk-margin>
        <li><a href="#"><span data-uk-pagination-previous></span></a></li>
        <li><a href="#">1</a></li>
        <li className="uk-active"><span>2</span></li>
        <li><a href="#">3</a></li>
        <li><a href="#">4</a></li>
        <li><a href="#"><span data-uk-pagination-next></span></a></li>
      </ul>
    </div>
  );
};

export default PaginationComponent;
