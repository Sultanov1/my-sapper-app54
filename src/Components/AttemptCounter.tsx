import React from 'react';
import './Component.css'

interface AttemptsCounterProps {
  attempts: number;
}

const AttemptsCounter: React.FC<AttemptsCounterProps> = ({ attempts }) => {
  return (
    <p className='attempts'>Попыток: {attempts}</p>
  );
};

export default AttemptsCounter;