function crossingSum(matrix, a, b) {
    let aSum=0,bSum=0;
    for(let i=0,x=matrix[0].length;i<x;i++) {
        aSum+=matrix[a][i];
    }
    for(let i=0,x=matrix.length;i<x;i++) {
        if (i!==a) bSum+=matrix[i][b];
    }
    return aSum+bSum;
}