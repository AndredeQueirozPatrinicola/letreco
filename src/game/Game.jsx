



export const getNewGame = () => {
    return {
        target: ["S", "A", "N", "T", "O"],
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
