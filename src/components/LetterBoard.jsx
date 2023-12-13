// LetterBoard.js
import React from 'react';
import LetterBoxLine from './LetterBoxLine'
import { SubmitButton } from './SubmitButton';

const LetterBoard = () => {

  const handleSubmit = () => {
    
  }

  return (
    <>
      <div className="flex flex-col justify-between h-full">
        {[...Array(5)].map((_, index) => (
          <LetterBoxLine 
            key={index} 
          />
        ))}
      </div>
      <SubmitButton
        onSubmit={handleSubmit}
      />
    </>
  );
};

export default LetterBoard;