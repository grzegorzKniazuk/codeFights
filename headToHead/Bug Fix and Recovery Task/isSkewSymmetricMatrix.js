function isSkewSymmetricMatrix(matrix) {
    for (var i = 0; i < matrix.length; i++) {
        for (var j = 0; j < matrix.length; j++) {
            if (matrix[i][j] !== -matrix[j][i]) {
                return false;
            }
        }
    }
    return true;
}
