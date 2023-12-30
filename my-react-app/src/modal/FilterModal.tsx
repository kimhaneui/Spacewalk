import React, { useState } from 'react';
import Button from '../component/Button';
import './Modal.css';

interface ModalProps {
  isOpen: boolean;
  onClose: (id: any) => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const buttons = [
    { id: 'all', text: '전체' },
    { id: 'open', text: 'open' },
    { id: 'closed', text: 'closed' },
  ];
  const [checkedButton, setCheckedButton] = useState(null);

  const handleButtonClick = (buttonId: any) => {
    setCheckedButton(buttonId);
  };

  const buttonClick = () => {
    console.log(checkedButton, 'checkedButton');
    onClose(checkedButton);
  };
  return (
    <div className={`modal ${isOpen ? 'open' : ''}`} onClick={onClose}>
      {isOpen && (
        <div
          className='modal-content'
          onClick={(e) => e.stopPropagation()}
        >
          <div>
            <p>이슈 상태</p>
          </div>
          <div className='button-container'>
            {buttons.map((button) => (
              <Button
                key={button.text}
                onClick={() => handleButtonClick(button.text)}
                className={checkedButton === button.text ? 'checked' : ''}
              >
                {button.text}
              </Button>
            ))}
          </div>
          <div className='confirm-btn'>
            <Button
              backgroundColor={'#1A8CFF'}
              width={'320px'}
              borderRadius={'10px'}
              onClick={() => buttonClick()}
            >
              적용
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
