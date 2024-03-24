import { useState } from "react"

import { KeyBoardLetterBox } from "./KeyBoardLetterBox"

export const KeyBoard = ({ letters }) => {
    const [ boardLetters, setBoardLetters ] = useState(letters)
    return (
            <div className="my-10 w-[30rem]">
                {
                    boardLetters.map((value, index) => {
                        return (
                        <div key={index} className={`flex ${index === 0? 'justify-between' : 'justify-around' }`}>
                            {
                                value.map((innerValue, innerIndex) => {
                                    return (
                                        <KeyBoardLetterBox
                                        key={innerIndex}
                                        letter={innerValue}
                                        />
                                    )
                                })
                            }
                        </div>
                        )
                    })
                }
            </div>
    )
} 