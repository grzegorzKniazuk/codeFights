function sudoku2(grid) {

    // test wiersze i kolumny
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0, columns = [], rows = []; j < grid[0].length; j++) {
            if (Number.isInteger(parseInt(grid[j][i]))) { // po kolumnach
                if (!columns.includes(parseInt(grid[j][i]))) {
                    columns.push(parseInt(grid[j][i]));
                } else return false;
            }
            if (Number.isInteger(parseInt(grid[i][j]))) { // po wierszach
                if (!rows.includes(parseInt(grid[i][j]))) {
                    rows.push(parseInt(grid[i][j]));
                } else return false;
            }
        }
    }

    // test 3x3
    let k = 0, l = 0, square = [], digits = [];
    while (k + 3 <= grid.length) {
        while (l + 3 <= grid[0].length) {
            square.push(grid[k][l],grid[k][l+1],grid[k][l+2],
                grid[k+1][l],grid[k+1][l+1],grid[k+1][l+2],
                grid[k+2][l],grid[k+2][l+1],grid[k+2][l+2]);
            digits = [];
            for (let i = 0; i < square.length; i++) {
                if (Number.isInteger(parseInt(square[i]))) {
                    if (!digits.includes(square[i])) digits.push(square[i]);
                    else return false;
                }
            }
            square = [];
            l += 3;
        }
        k += 3;
        l = 0;
    }
    return true;
}