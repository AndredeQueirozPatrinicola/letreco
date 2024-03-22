



export const getNewGame = () => {
    return {
        target: ["S", "A", "N", "T", "O"],
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
