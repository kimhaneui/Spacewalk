import React from 'react';
// image
import rightArrowIcon from '../image/right-arrow.png';
import leftArrowIcon from '../image/left-arrow.png';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (pageNumber: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  return (
    <div className='pagination'>
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <img className='pg-arrow' src={leftArrowIcon} alt='Arrow Icon' />
      </button>
      {Array.from({ length: totalPages }).map((_, index) => (
        <button
          key={index + 1}
          onClick={() => onPageChange(index + 1)}
          className={currentPage === index + 1 ? 'active' : ''}
        >
          {index + 1}
        </button>
      ))}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <img className='pg-arrow' src={rightArrowIcon} alt='Arrow Icon' />
      </button>
    </div>
  );
};

export default Pagination;
