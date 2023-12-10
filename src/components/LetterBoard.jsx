import { LetterBoxLine } from "./LetterBoxLine";




export function LetterBoard() {
    const letterBoxesLines = []
    for (let i = 0; i < 5; i++) {
        letterBoxesLines.push(<LetterBoxLine key={i} componentId={i}/>);
    }
    return (
        <div className="
            flex
            flex-col
            justify-between
            h-full
        ">
            {letterBoxesLines}
        </div>
    );
}