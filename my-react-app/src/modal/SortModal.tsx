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
  const [checkedButton, setCheckedButton] = useState({
    id: 'created',
    text: '작성일 순',
  });

  const handleButtonClick = (buttonId: any) => {
    setCheckedButton(buttonId);
    onClose(buttonId);
  };

  return (
    <div className={`modal ${isOpen ? 'open' : ''}`}>
      {isOpen && (
        <div className='sort-content'>
          <p className='sort-header'>정렬</p>
          <ul className='sort-modal'>
            {buttons.map((button) => (
              <li
                key={button.id}
                onClick={() => handleButtonClick(button)}
                className={checkedButton.id === button.id ? 'clicked' : ''}
              >
                {button.text}
                {checkedButton.id === button.id && (
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
