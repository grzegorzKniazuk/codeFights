function matrixTransposition(matrix) {
    let output=[], t=[],temp=[], height=matrix[0].length, width = 0;
    for(let i=0;i<matrix.length;i++) {
        width+=matrix[i].length;
    }
    width/=height;
    for(let i=0;i<height;i++) {
        for(let j=0;j<width;j++) {
            temp.push(matrix[j][i]);
        }
        output.push(temp.slice(0,temp.length+1));
        temp=[];
    }
    return output;
}