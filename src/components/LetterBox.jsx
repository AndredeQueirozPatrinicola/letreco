import { useState } from "react"

export function LetterBox(props) {
    const [state, setState] = useState({
        letter : "",
        isDisabled : props.isDisabled
    });

    const handleChange = (e) => {
      const lastLetter = e.target.value.charAt(e.target.value.length - 1);
      setState({
        ...state,
        letter : lastLetter
      });
      props.updateCurrentWord(props.componentId, lastLetter);
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Tab'){

            if(props.componentId === 4){
                event.preventDefault();
            }
        }
        
    }

    return (
      <div className="
              border-black
              border-solid  
              border-2 
              w-24 
              h-24 
              rounded-lg
              flex
              justify-center
              items-center
          ">
        <input
          className="
                  text-white                
                  text-6xl
                  w-full
                  h-full
                  text-center
                  uppercase
              "
          value={state.letter}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          disabled={state.isDisabled}
        />
      </div>
    );
  }