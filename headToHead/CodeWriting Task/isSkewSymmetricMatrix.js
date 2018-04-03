function isSkewSymmetricMatrix(matrix) {
    for(let i=0;i<matrix.length;i++) {
        for(let j=0;j<matrix.length;j++) {
            if(matrix[i][j]===0&&matrix[j][i]===0) {
                continue;
            }
            else if(matrix[i][j]===matrix[j][i]) {
                return false;
            }
        }
    }
    return true;
}

function isSkewSymmetricMatrix(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix.length; j++) {
            if (matrix[i][j] !== -matrix[j][i]) {
                return false;
            }
        }
    }
    return true;
}
