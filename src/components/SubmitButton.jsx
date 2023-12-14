// LetterBoard.js
import React from 'react';


export const SubmitButton = ({ onSubmit }) => {
  const handleClick = () => {
    if (onSubmit && typeof onSubmit === 'function') {
      onSubmit();
    }
  };

  return (
    <button className="" onClick={handleClick}>
      Submit
    </button>
  );
};


const gameState = {

}