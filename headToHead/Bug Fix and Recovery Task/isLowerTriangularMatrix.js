function isLowerTriangularMatrix(matrix) {

    for (var i = 0; i < matrix.length; i++) {
        for (var j = 0; j < i; j++) {
            if (j < i && matrix[j][i] !== 0) {
                return false;
            }
        }
    }
    return true;
}
