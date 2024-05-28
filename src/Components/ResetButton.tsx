import React from 'react';

interface ResetButtonProps {
  onClick: () => void;
}

const ResetButton: React.FC<ResetButtonProps> = ({ onClick }) => {
  return (
    <button className='reset-btn' onClick={onClick}>
      Сброс
    </button>
  );
};

export default ResetButton;
