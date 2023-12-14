
import React, { useState } from 'react';
import LetterBox from './LetterBox';
const LetterBoxLine = ({ lineIndex, onLineChange }) => {
  const [lineState, setLineState] = useState({
    inGame: false,
    word: ['', '', '', '', ''],
  });

  const handleBoxChange = (index, value) => {
    setLineState((prev) => {
      const newLineLetters = {
        ...prev,
        word: [...prev.word],
      };
      newLineLetters.word[index] = value.charAt(value.length - 1);
      onLineChange(lineIndex, newLineLetters);
      return newLineLetters;
    });
  };


  return (
    <div className="flex justify-between w-[115%] mt-5">
      {lineState.word.map((letter, index) => {
        return (
            <LetterBox 
                key={index} 
                value={letter} 
                onChange={(value) => handleBoxChange(index, value)} 
            />
          )
      })}
    </div>
  );
};

export default LetterBoxLine;