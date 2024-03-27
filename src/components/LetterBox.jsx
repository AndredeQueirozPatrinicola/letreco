import { useState } from "react";

const LetterBox = ({
   index, 
   lineIndex, 
   letter, 
   target,
   turn, 
   win,
   lost,
   handleLetterChange ,
   handleEnter
}) => {

  const isUnique = () => {
    const letterSearch = target.filter((letters)=>{
      return letters === letter.toUpperCase()
    })
    if(letterSearch.length > 1){
      return false
    }
    return true
  }

  const getColor = () => {
    if(turn < lineIndex){
      return 'bg-gray-500'
    }
    else if(turn > lineIndex){
      if(letter.toUpperCase() === target[index]){
        return 'bg-lime-500'
      }
      else if(target.includes(letter.toUpperCase()) && !isUnique() ){
        return 'bg-yellow-500'
      }
      else{
        return 'bg-red-500'
      }
    }
    if(win){
      return 'bg-lime-500'
    }
    if(lost){
      return 'bg-red-500'
    }
  }

  const handleKeyDown = (e) => {
    if(e.code === 'Enter'){
      e.preventDefault()
      handleEnter()
    }

  };

  return (
    <div className="border-solid border-2 w-[3.5rem] h-[3.5rem] rounded-lg flex justify-center items-center mx-1">
      {
        (turn === lineIndex && !win && !lost) ? (
          <input
            className="bg-gray-800 text-white text-5xl w-full h-full text-center uppercase rounded-lg"
            value={letter}
            onChange={handleLetterChange}
            onKeyDown={handleKeyDown}
          />
        ) : (
          <div
            className={`${getColor()} text-white text-5xl w-full h-full text-center uppercase rounded-lg`}
          >{letter}</div>
        )
        
      }
      
    </div>
  );
};

export default LetterBox;
