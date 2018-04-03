function graphEdges(matrix) {
    let counter = 0;
    for (i of matrix) {
        for (j of i) {
            if (j) counter++;
        }
    }
    return counter/2;
}