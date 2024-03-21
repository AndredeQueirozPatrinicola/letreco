



export const getNewGame = () => {
    return {
        target: ["P", "O", "R", "T", "A"],
        turn: 0,
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


