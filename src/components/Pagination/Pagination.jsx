import React from 'react';
import './pagination.scss';

export function Pagination({ pages, setCurrentPage, currentPage }) {
  return (
    <div className='pagination-container'>
      {Array.from(Array(pages), (item, index) => {
        return (
          <button
            key={index}
            style={
              index === currentPage
                ? { backgroundColor: 'var(--COLOR-SECONDARY)' }
                : null
            }
            className='pagination-button'
            value={index}
            onClick={(e) => setCurrentPage(Number(e.target.value))}
          >
            {index + 1}
          </button>
        );
      })}
    </div>
  );
}
