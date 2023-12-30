// Modal.tsx
import React from 'react';
import './Modal.css';

interface FilterModalProps {
  isOpen: boolean;
  onClose: (id: any) => void;
}

const FilterModal: React.FC<FilterModalProps> = ({ isOpen, onClose }) => {
  return (
    <div className={`modal ${isOpen ? 'open' : ''}`} onClick={onClose}>?????</div>
  );
};

export default FilterModal;
