import React, { useState } from 'react';
import './Modal.css';

import icon from '../image/checked.png';

interface SortModalProps {
  isOpen: boolean;
  onClose: (id: any) => void;
}

const SortModal: React.FC<SortModalProps> = ({ isOpen, onClose }) => {
  const buttons = [
    { id: 'created', text: '작성일 순' },
    { id: 'updated', text: '수정일 순' },
    { id: 'comments', text: '코멘트 순' },
  ];
  const [checkedButton, setCheckedButton] = useState(null);

  const handleButtonClick = (buttonId: any) => {
    setCheckedButton(buttonId);
    onClose(checkedButton);
  };
  return (
    <div className={`modal ${isOpen ? 'open' : ''}`} onClick={onClose}>
      {isOpen && (
        <div
          className='sort-content'
          onClick={(e) => e.stopPropagation()}
        >
          <p className='sort-header'>정렬</p>
          <ul className='sort-modal'>
            {buttons.map((button) => (
              <li
                key={button.text}
                onClick={() => handleButtonClick(button.text)}
                className={checkedButton === button.text ? 'clicked' : ''}
              >
                {button.text}
                {checkedButton === button.text && (
                  <img className='check-icon' src={icon} alt='Check Icon' />
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SortModal;
