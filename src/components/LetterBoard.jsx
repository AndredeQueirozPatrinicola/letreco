import React, { useState } from 'react';
import LetterBoxLine from './LetterBoxLine';
import LetterBox from './LetterBox';
import { KeyBoard } from './KeyBoard';
import { SubmitButton } from './SubmitButton';
import { getNewGame } from '../game/Game';
import { letters } from '../game/Letters';
import { words } from '../utils/words';
import { binarySearch } from '../utils/binarySearch';

const LetterBoard = () => {
  const [ gameState, setGameState ] = useState(getNewGame())
  const [ usedLetters, setUsedLetters ] = useState(letters)

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

  const evalUsedLetters = (letters) => {
    const upperLetters = letters.map(function(l){ return l.toUpperCase(); })
    const newUsedLetters = [...usedLetters]
    for(let i = 0; i < usedLetters.length; i++){
      for(let j = 0; j < usedLetters[i].length; j++){
        const currLetter = usedLetters[i][j].letter
        if(upperLetters.includes(currLetter)){
          const targetLetterByIndex = gameState.target[upperLetters.indexOf(currLetter)]
          newUsedLetters[i][j].used = true
          if(targetLetterByIndex === currLetter){
            newUsedLetters[i][j].status = 3
          }
          else if(gameState.target.includes(currLetter)){
            newUsedLetters[i][j].status = 2
          }
          else{
            newUsedLetters[i][j].status = 1
          }
        }
      }
    }
    setUsedLetters(newUsedLetters)
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
        if(newGameState.turn === 4 && !newGameState.win){
          newGameState.lost = true;
        }
        if(!newGameState.win && !newGameState.lost){
          newGameState.turn++ 
        }
        evalUsedLetters(currLine)
        setGameState(newGameState)
      } 
  }

  return (
   <>
     <div className='flex flex-col'>
        <div className='flex min-h-14 justify-center items-center'>
        {
          gameState.win? (
            <div>Voce venceu!</div>
          ) : (
            ""
          )
        }
        {
          gameState.lost? (
            <div>Voce perdeu! A palavra era: {gameState.target}</div>
          ) : (
            ""
          )
        }
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
        </div>
      </div>
      <div>
        <KeyBoard
          letters={usedLetters}
        />
      </div>
    </>
  );
};

export default LetterBoard;
