// LetterBoard.js
import React, { useEffect, useState } from 'react';
import LetterBoxLine from './LetterBoxLine'
import { SubmitButton } from './SubmitButton';

const LetterBoard = () => {
  const [lines, setLines] = useState(Array.from({ length: 5 }, () => ({inGame:false, word:["","","","","",]})));

  const handleLineChange = (lineIndex, lineState) => {
    setLines((prev) => {
      prev[lineIndex].word = lineState.word
      return prev
    })
  };
 
  const handleSubmit = () => {

    console.log('Board submitted:', lines);
  };

  return (
    <>
      <div className="flex flex-col justify-between h-full">
      {lines.map((line, index) => {
          console.log(line)
          return (
            <LetterBoxLine
            key={index}
            lineIndex={index}
            onLineChange={(lineIndex, lineState) => handleLineChange(lineIndex, lineState)}
          />
          )
        })}
      </div>
      <SubmitButton
        onSubmit={handleSubmit}
      />
    </>
  );
};

export default LetterBoard;