import React from 'react';
import './pagination.scss';

export function SelectPagination({ itensPerPage, setItensPerPage }) {
  return (
    <div className='pagination-container'>
      <h6>Itens por página:</h6>
      <select
        className='select-pagination'
        value={itensPerPage}
        onChange={(e) => setItensPerPage(Number(e.target.value))}
      >
        <option value={6}>6</option>
        <option value={12}>12</option>
        <option value={24}>24</option>
      </select>
    </div>
  );
}
