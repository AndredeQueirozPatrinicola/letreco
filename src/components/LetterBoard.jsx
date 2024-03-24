import React, { useState } from 'react';
import LetterBoxLine from './LetterBoxLine';
import LetterBox from './LetterBox';
import { SubmitButton } from './SubmitButton';
import { getNewGame } from '../game/Game';
import { words } from '../utils/words';
import { binarySearch } from '../utils/binarySearch';
import { Toast } from '../components/Toast';

const LetterBoard = () => {
  const [ gameState, setGameState ] = useState(getNewGame())
  const [ toastOpened, setToastOpened] = useState(false)

  const handleLineChange = (e, innerIndex, lineIndex) => {
    const newLetter = e.target.value.slice(-1)
    const newLine = [...gameState.board.values]

    newLine[lineIndex][innerIndex] = newLetter

    const newGameState = {
      ...gameState,
      board: {
        values: newLine
      }
    }
    setGameState(newGameState)
  }

  const handleSubmit = (e) => {
    const newGameState = {
      ...gameState
    }
    const currLine = gameState.board.values[gameState.turn] 
    const targetWord = gameState.target


      if(currLine.join("").toUpperCase() === targetWord.join("").toUpperCase()){
        newGameState.win = true;
      }
      if (!currLine.includes("")){
        if(newGameState.turn === 4){
          newGameState.lost = true;
        }
        if(!newGameState.win && !newGameState.lost){
          newGameState.turn++ 
        }
        setGameState(newGameState)
      } 
    
  }

  return (
    <div className='flex flex-col'>
      <div className='flex min-h-14 justify-center items-center'>
        {/* Palavra inválida */}
      </div>
      <div className="flex flex-col justify-between">
        {gameState.board.values.map((line, index) => (
          <LetterBoxLine key={index}>
            {line.map((input, innerIndex) => (
              <LetterBox 
                key={innerIndex} 
                index={innerIndex} 
                lineIndex={index}
                letter={input}
                target={gameState.target}
                turn={gameState.turn}
                win={gameState.win}
                lost={gameState.lost}
                handleLetterChange={(e) => handleLineChange(e, innerIndex, index)}
                handleEnter={handleSubmit}
              />
            ))}
          </LetterBoxLine>
        ))}
      </div>
      <div className='min-h-10 flex items-center px-6'>
        <SubmitButton  handleSubmit={handleSubmit}/>
          {
            gameState.win? (
              <div>Voce venceu!</div>
            ) : (
              ""
            )
          }
      </div>
    </div>
  );
};

export default LetterBoard;