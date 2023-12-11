
import { useEffect, useState } from "react";
import { LetterBox } from "../components/LetterBox"


export function LetterBoxLine(props){
    const [state, setState] = useState({
        inGame : props.inGame,
    })

    const letterBoxes = []
    for (let i = 0; i < 5; i++) {
        letterBoxes.push(<LetterBox key={i} componentId={i} isDisabled={!state.inGame} updateCurrentWord={props.updateCurrentWord}/>);          
    }

    return (
        <div className="
            flex
            justify-between
            w-[115%]
            mt-5
        ">
            {letterBoxes}
        </div>
    );
}