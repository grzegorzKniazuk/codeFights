function minesweeper(matrix) {
    let result = [],
        tempArr = [],
        counter = 0;

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (i === 0) {
                if (j === 0) {
                    if (matrix[i][j+1] === true) counter++;
                    if (matrix[i+1][j] === true) counter++;
                    if (matrix[i+1][j+1] === true) counter++;
                }
                else if (j === matrix[0].length-1) {
                    if (matrix[i][j-1] === true) counter++;
                    if (matrix[i+1][j] === true) counter++;
                    if (matrix[i+1][j-1] === true) counter++;
                } else {
                    if (matrix[i][j-1] === true) counter++;
                    if (matrix[i][j+1] === true) counter++;
                    if (matrix[i+1][j] === true) counter++;
                    if (matrix[i+1][j-1] === true) counter++;
                    if (matrix[i+1][j+1] === true) counter++;
                }
            }
            else if (i+1 === matrix.length) {
                if (j === 0) {
                    if (matrix[i][j+1] === true) counter++;
                    if (matrix[i-1][j+1] === true) counter++;
                    if (matrix[i-1][j] === true) counter++;
                }
                else if (j === matrix[0].length-1) {
                    if (matrix[i][j-1] === true) counter++;
                    if (matrix[i-1][j-1] === true) counter++;
                    if (matrix[i-1][j] === true) counter++;
                } else {
                    if (matrix[i][j-1] === true) counter++;
                    if (matrix[i][j+1] === true) counter++;
                    if (matrix[i-1][j-1] === true) counter++;
                    if (matrix[i-1][j] === true) counter++;
                    if (matrix[i-1][j+1] === true) counter++;
                }
            } else {
                if (j === 0) {
                    if (matrix[i-1][j] === true) counter++;
                    if (matrix[i+1][j] === true) counter++;
                    if (matrix[i-1][j+1] === true) counter++;
                    if (matrix[i][j+1] === true) counter++;
                    if (matrix[i+1][j+1] === true) counter++;
                }
                else if (j === matrix[0].length-1) {
                    if (matrix[i][j-1] === true) counter++;
                    if (matrix[i-1][j] === true) counter++;
                    if (matrix[i+1][j] === true) counter++;
                    if (matrix[i-1][j-1] === true) counter++;
                    if (matrix[i+1][j-1] === true) counter++;
                } else {
                    if (matrix[i-1][j-1] === true) counter++;
                    if (matrix[i-1][j] === true) counter++;
                    if (matrix[i-1][j+1] === true) counter++;
                    if (matrix[i][j+1] === true) counter++;
                    if (matrix[i][j-1] === true) counter++;
                    if (matrix[i+1][j-1] === true) counter++;
                    if (matrix[i+1][j] === true) counter++;
                    if (matrix[i+1][j+1] === true) counter++;
                }
            }
            tempArr.push(counter);
            counter = 0;
        }
        result.push(tempArr);
        tempArr = [];
    }
    return result;
}