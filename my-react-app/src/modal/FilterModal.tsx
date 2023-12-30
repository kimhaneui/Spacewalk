import React, { useEffect, useMemo, useState } from 'react';
import Button from '../component/Button';
import './Modal.css';

interface ModalProps {
  isOpen: boolean;
  onClose: (id: any) => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const buttons = useMemo(
    () => [
      { id: 'all', text: '전체' },
      { id: 'open', text: 'open' },
      { id: 'closed', text: 'closed' },
    ],
    [] // 의존성 배열 비워두기
  );
  const [checkedButton, setCheckedButton] = useState<string | null>(null);

  const handleButtonClick = (buttonId: any) => {
    setCheckedButton(buttonId);
  };

  const buttonClick = () => {
    onClose(checkedButton);
  };

  useEffect(() => {
    if (buttons.length > 0 && checkedButton === null) {
      setCheckedButton(buttons[0].id);
    }
  }, [buttons, checkedButton]);

  return (
    <div className={`modal ${isOpen ? 'open' : ''}`}>
      {isOpen && (
        <div className='modal-content'>
          <div>
            <p>이슈 상태</p>
          </div>
          <div className='button-container'>
            {buttons.map((button) => (
              <Button
                key={button.id}
                onClick={() => handleButtonClick(button.id)}
                className={checkedButton === button.id ? 'checked' : ''}
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
