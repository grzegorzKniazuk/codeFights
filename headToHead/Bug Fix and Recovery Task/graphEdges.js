function graphEdges(matrix) {

    var edges = 0;

    for (var i = 0; i < matrix.length; i++) {
        for (var j = 0; j < matrix.length; j++) {
            if (matrix[i][j]) {
                edges++;
            }
        }
    }

    return edges/2;
}
