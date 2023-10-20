/**
 *
 * Pagination
 *
 */

import React from 'react';
import ReactPaginate from 'react-paginate';

const Pagination = props => {
  const { totalPages, onPagination } = props;

  const handlePageClick = event => {
    onPagination('pagination', event.selected + 1);
  };

  return (
    <div className='pagination-box'>
      <ReactPaginate
        nextLabel= {<img width="15" height="15" src="https://img.icons8.com/material-two-tone/15/right.png" alt="right"/>}
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        pageCount={totalPages} // The total number of pages.
        previousLabel={<img width="15" height="15" src="https://img.icons8.com/material-two-tone/15/left.png" alt="left"/>}
        pageClassName='page-item'
        pageLinkClassName='page-link'
        previousClassName='page-item'
        previousLinkClassName='page-link'
        nextClassName='page-item'
        nextLinkClassName='page-link'
        breakLabel='...'
        breakClassName='page-item'
        breakLinkClassName='page-link'
        containerClassName='pagination'
        activeClassName='active'
        renderOnZeroPageCount={null}
      />
    </div>
  );
};

export default Pagination;
