// Modal.tsx
import React, { useState } from 'react';
import './Modal.css';

interface ModalProps {
  isOpen: boolean;
  onClose: (id: any) => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const [checkedButton, setCheckedButton] = useState(null);

  const buttons = [
    { id: 1, text: '전체' },
    { id: 2, text: 'open' },
    { id: 3, text: 'closed' },
  ];
  const buttonClick = () => {
    console.log(checkedButton, 'checkedButton');
    onClose(checkedButton);
  };
  return (
    <div className={`modal ${isOpen ? 'open' : ''}`} onClick={onClose}>
      <div className='modal-content'>
        {buttons.map((button) => (
          <div key={button.text}>{button.text}</div>
        ))}
        <button onClick={() => buttonClick()}>적용</button>
      </div>
    </div>
  );
};

export default Modal;
