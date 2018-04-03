function matrixElementsSum(matrix) {
    for (let i=0,x=matrix.length;i<x;i++) {
        for(let j=0,y=matrix[i].length;j<y;j++) {
            if(matrix[i][j]===0) {
                for(let k=i;k<x;k++) {
                    matrix[k][j]=0;
                }
            }
        }
    }
    for(var i=0, sum=0,x=matrix.length;i<x;i++){
        for(let j=0,y=matrix[i].length;j<y;j++) {
            sum+=matrix[i][j];
        }
    }
    return sum;
}