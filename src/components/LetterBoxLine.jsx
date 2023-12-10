
import { LetterBox } from "../components/LetterBox"


export function LetterBoxLine(){
    const letterBoxes = []
    for (let i = 0; i < 5; i++) {
        letterBoxes.push(<LetterBox key={i} />);
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