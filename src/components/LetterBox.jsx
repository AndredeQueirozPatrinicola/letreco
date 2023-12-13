import { useState } from "react"

const LetterBox = ({ value, onChange }) => {
  const handleKeyDown = (event) => {
    if (event.key === 'Tab') {
      if (value.componentId === 4) {
        event.preventDefault();
      }
    }
  };

  return (
    <div className="border-black border-solid border-2 w-24 h-24 rounded-lg flex justify-center items-center">
      <input
        className="text-white text-6xl w-full h-full text-center uppercase"
        value={value}
        onChange={(e) => onChange(e.target.value)}  
        onKeyDown={handleKeyDown}
      />
    </div>
  );
};

export default LetterBox;