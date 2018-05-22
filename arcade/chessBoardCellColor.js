function chessBoardCellColor(cell1, cell2) {
    if (cell1 === cell2) return true;
    let cell1Index = [], cell2Index = [], // x, y
        board = [["A1","A2","A3","A4","A5","A6","A7","A8"],
                 ["B1","B2","B3","B4","B5","B6","B7","B8"],
                 ["C1","C2","C3","C4","C5","C6","C7","C8"],
                 ["D1","D2","D3","D4","D5","D6","D7","D8"],
                 ["E1","E2","E3","E4","E5","E6","E7","E8"],
                 ["F1","F2","F3","F4","F5","F6","F7","F8"],
                 ["G1","G2","G3","G4","G5","G6","G7","G8"],
                 ["H1","H2","H3","H4","H5","H6","H7","H8"]];
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            if (board[i][j] === cell1) cell1Index.push(i+1,j+1);
            if (board[i][j] === cell2) cell2Index.push(i+1,j+1);
        }
    }
    // jesli sa czarne to
    if      (cell1Index[0] % 2 !== 0 && cell1Index[1] %2 !== 0 && cell2Index[0] % 2 !== 0 && cell2Index[1] % 2 !== 0) return true;
    else if (cell1Index[0] % 2 !== 0 && cell1Index[1] %2 !== 0 && cell2Index[0] % 2 === 0 && cell2Index[1] % 2 === 0) return true;
    else if (cell1Index[0] % 2 === 0 && cell1Index[1] %2 === 0 && cell2Index[0] % 2 === 0 && cell2Index[1] % 2 === 0) return true;

    // jesli sa biale to
    else if (cell1Index[0] % 2 === 0 && cell1Index[1] %2 !== 0 && cell2Index[0] % 2 === 0 && cell2Index[1] % 2 !== 0) return true;
    else if (cell1Index[0] % 2 === 0 && cell1Index[1] %2 !== 0 && cell2Index[0] % 2 !== 0 && cell2Index[1] % 2 === 0) return true;
    else if (cell1Index[0] % 2 !== 0 && cell1Index[1] %2 === 0 && cell2Index[0] % 2 === 0 && cell2Index[1] % 2 !== 0) return true;

    return false;
}