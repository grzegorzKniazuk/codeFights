function swapDiagonals(matrix) {
    var length = matrix.length - 1;
    return matrix.map((row, i) => {
        var newRow = row.slice();
        newRow[i] = matrix[i][length - i];
        newRow[length - i] = matrix[i][i];
        return newRow;
    });
}