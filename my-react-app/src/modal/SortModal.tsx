// Modal.tsx
import React from 'react';
import './Modal.css';
import Button from '../component/Button';

interface SortModalProps {
  isOpen: boolean;
  onClose: (id: any) => void;
}

const SortModal: React.FC<SortModalProps> = ({ isOpen, onClose }) => {
  const buttons = [
    { id: 1, text: '작성일 순' },
    { id: 2, text: '수정일 순' },
    { id: 3, text: '코멘트 순' },
  ];
  return (
    <div className={`modal ${isOpen ? 'open' : ''}`} onClick={onClose}>
      <div className='modal-content'>
        {buttons.map((button) => (
          <Button key={button.text} onClick={() => {}}>
            {button.text}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default SortModal;
