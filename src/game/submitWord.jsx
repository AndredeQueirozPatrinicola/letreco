

const currentWord = "CEIAS"

function getScore(inputString, targetString) { 
    const resultArray = [0, 0, 0, 0, 0];
  
    for (let i = 0; i < 5; i++) {
      if (inputString[i] === targetString[i]) {
        resultArray[i] = 3;
      }
    }
  
    for (let i = 0; i < 5; i++) {
      if (resultArray[i] !== 3) {
        const indexInTarget = targetString.indexOf(inputString[i]);
        if (indexInTarget !== -1 && resultArray[indexInTarget] === 0) {
          if (inputString[indexInTarget] === targetString[indexInTarget]) {
            resultArray[i] = 1;
          } else {
            resultArray[i] = 2;
          }
        } else {
          resultArray[i] = 1;
        }
      }
    }
  
    return resultArray;
  }

export function submitWord(board, word){
    const gameState = board.gameState
    const score = getScore(word, currentWord);

    gameState.lastScore = score; 
    gameState.scoreBoard[gameState.round] = score;
    gameState.wordBoard[gameState.round]  = Array.from(word);
    gameState.round++;

    if(board.gameState.round > 4){
        console.log("Game Over")
    }
    
    return gameState






    // for(const letter of word){
    //     for(const letterCurrentWord of currentWord){
    //         if(letter === letterCurrentWord){
    //             board.
    //         }
    //     }
    // }
}