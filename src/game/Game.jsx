import { words } from '../utils/words';
import { randomNumberInRange } from '../utils/randomNumber'


export const getNewGame = () => {
    const wordIndex = randomNumberInRange(0, words.length)
    const word = words[wordIndex].toUpperCase()
    const arrWord = word.split('')
    return {
        target: arrWord,
        turn: 0,
        win:false,
        lost:false,
        board: {
            values: [
                ["", "", "", "", ""],
                ["", "", "", "", ""],
                ["", "", "", "", ""],
                ["", "", "", "", ""],
                ["", "", "", "", ""],
            ]
        }
    }
} 
