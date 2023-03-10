import React from 'react';
import ReactPaginate from 'react-paginate';


const PaginationComponent = (props) => {
  const {currentPage, totalPage, onPageChange} = props;

  const handleChangePage = ({selected: pageIndex}) => onPageChange(pageIndex + 1);

  if (totalPage > 1) {
    return (
      <div className="uk-margin-large-top uk-text-small">
        <ReactPaginate
          initialPage={currentPage - 1}
          breakLabel='...'
          previousLabel={<span data-uk-pagination-previous></span>}
          nextLabel={<span data-uk-pagination-next></span>}
          onPageChange={handleChangePage}
          pageRangeDisplayed={2}
          pageCount={totalPage}
          renderOnZeroPageCount={null}
          containerClassName='uk-pagination uk-flex-center uk-text-500 uk-margin-remove'
          activeClassName='uk-active'
        />
      </div>
    );
  }

  return (<></>);
};

export default PaginationComponent;
