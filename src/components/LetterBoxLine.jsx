
import React, { useState } from 'react';
import LetterBox from './LetterBox';

const LetterBoxLine = () => {
  const [lineLetters, setLineLetters] = useState(['', '', '', '', '']);

  const handleBoxChange = (index, value) => {
    setLineLetters((prev) => {
        const newLineLetters = [...prev]
        newLineLetters[index] = value.charAt(value.length - 1)
        return newLineLetters
    });
};

  return (
    <div className="flex justify-between w-[115%] mt-5">
      {lineLetters.map((letter, index) => {
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