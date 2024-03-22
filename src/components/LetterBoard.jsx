import React, { useState } from 'react';
import LetterBoxLine from './LetterBoxLine';
import LetterBox from './LetterBox';
import { SubmitButton } from './SubmitButton';
import { getNewGame } from '../game/Game';

const LetterBoard = () => {
  const [ gameState, setGameState ] = useState(getNewGame())

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
    console.log({
      ...newGameState,
      turn: newGameState.turn++
    })
    setGameState(
      {
        ...newGameState,
        turn: newGameState.turn++
      }
    )
  }


  return (
    <div className='flex flex-col'>
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
                handleLetterChange={(e) => handleLineChange(e, innerIndex, index)}
              />
            ))}
          </LetterBoxLine>
        ))}
      </div>
      <SubmitButton  handleSubmit={handleSubmit}/>
    </div>
  );
};

export default LetterBoard;