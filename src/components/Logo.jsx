import { useState, useEffect } from "react"
import { randomNumberInRange } from "../utils/randomNumber"


export const Logo = () => {
    const logoLetters = ['L', 'e', 't', 'r', 'i', 't' , 'a', 's']
    const colors = [
        "text-black",
        "text-lime-500",
        "text-yellow-500",
        "text-red-500",
        "text-gray-500",
        "text-b-indigo-500",
        "text-blue-500"
    ]

    const getLetterColor = () => {
        const index = randomNumberInRange(1, colors.length);
        const color = colors[index];
        colors.slice(index);
        return color
    }

    return (
        <h1 className="flex items-center text-7xl">
            {
                logoLetters.map((value, index) => {
                    return (
                    <span 
                        key={index}
                        className={`${getLetterColor()}`}
                    >
                        {value}
                    </span>
                    )    
                })
            }
        </h1>
    )
}