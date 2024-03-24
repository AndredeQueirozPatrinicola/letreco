import { useState } from "react"
import { letters } from "../game/Letters"


export const KeyBoardLetterBox = ({ letter }) => {
    const getColor = () => {
        if (letter.status === 0){}
        else if(letter.status === 1){
            return "bg-red-500 text-white"
        }
        else if(letter.status === 2){
            return "bg-yellow-500 text-white"
        }
        else if(letter.status === 3){
            return "bg-lime-500 text-white"
        }
    }
    return (
        <div className={`w-8 h-8 text-center border-2 m-1 rounded-lg ${getColor()}`}>
           {letter.letter}
        </div>
    )
} 