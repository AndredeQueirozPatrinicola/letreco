import { LetterBoxLine } from "./LetterBoxLine";
import { submitWord } from "../game/submitWord";

import { useState, useEffect } from "react";

// 0 - Not Answerd 
// 1 - Wrong 
// 2 - Wrong Place 
// 3 - Correct

export function LetterBoard(props) {
    const [board, setBoard] = useState({
      gameState: {
        inGame: true,
        round: 0,
        lastScore: [0, 0, 0, 0, 0],
        wordBoard: [
          ["", "", "", "", ""],
          ["", "", "", "", ""],
          ["", "", "", "", ""],
          ["", "", "", "", ""],
          ["", "", "", "", ""],
        ],
        scoreBoard: [
          [0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0],
        ],
      },
      currentWord: ["", "", "", "", ""],
    });
  
    useEffect(() => {
      const listener = (e) => {
        console.log("useEffect");
        if (e.code === "Enter") {
          e.preventDefault();
          setBoard((prevBoard) => {
            
            const word = prevBoard.currentWord.join("").toUpperCase();
            if (word.length === 5) {
              const newGameState = submitWord(prevBoard, word);
              return {
                ...prevBoard,
                gameState: newGameState,
                currentWord: ["", "", "", "", ""],
              };
            }
            // If the condition is not met, return the current state unchanged
            return prevBoard;
          });
        }
      };
  
      document.addEventListener("keydown", listener);
  
      return () => {
        document.removeEventListener("keydown", listener);
      };
    }, []); // Empty dependency array to run the effect only once
  
    const updateCurrentWord = (index, letter) => {
      setBoard((prevBoard) => ({
        ...prevBoard,
        currentWord: [
          ...prevBoard.currentWord.slice(0, index),
          letter,
          ...prevBoard.currentWord.slice(index + 1),
        ],
      }));
    };
  
    const letterBoxesLines = [];
    for (let i = 0; i < 5; i++) {
      i === board.gameState.round
        ? letterBoxesLines.push(
            <LetterBoxLine
              key={i}
              componentId={i}
              updateCurrentWord={updateCurrentWord}
              inGame={true}
            />
          )
        : letterBoxesLines.push(
            <LetterBoxLine
              key={i}
              componentId={i}
              updateCurrentWord={updateCurrentWord}
              inGame={false}
            />
          );
    }
  
    return (
      <div className="flex flex-col justify-between h-full">
        {letterBoxesLines}
      </div>
    );
  }