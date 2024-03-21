import { useState } from "react";

const LetterBox = ({
   index, 
   lineIndex, 
   letter, 
   target,
   turn, 
   handleLetterChange 
}) => {

  const getColor = () => {
    if(turn < lineIndex){
      return 'bg-gray-300'
    }
    else if(turn > lineIndex){
      console.log(
        letter,
        target,
        target[index]
      )
      if(letter.toUpperCase() === target[index]){
        return 'bg-lime-400'
      }
      else if(target.includes(letter.toUpperCase())){
        return 'bg-yellow-400'
      }
      else{
        return 'bg-red-400'
      }
    }
  }

  const handleKeyDown = (e) => {
    if (e.code === "Tab" && index === 4) {
      e.preventDefault();
    }
  };

  return (
    <div className="border-solid border-2 w-16 h-16 rounded-lg flex justify-center items-center mx-1">
      {
        turn === lineIndex ? (
          <input
            className="bg-gray-800 text-white text-6xl w-full h-full text-center uppercase rounded-lg"
            value={letter}
            onChange={handleLetterChange}
            onKeyDown={handleKeyDown}
          />
        ) : (
          <div
            className={`${getColor()} text-white text-6xl w-full h-full text-center uppercase rounded-lg`}
          >{letter}</div>
        )
        
      }
      
    </div>
  );
};

export default LetterBox;