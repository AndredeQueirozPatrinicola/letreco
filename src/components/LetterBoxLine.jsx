// LetterBoxLine.js
import React from 'react';

const LetterBoxLine = ({ children, handleLineChange }) => {
  return (
    <div className="flex justify-between my-2 mx-5" onChange={handleLineChange}>
      {children}
    </div>
  );
};

export default LetterBoxLine;