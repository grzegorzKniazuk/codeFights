function boxBlur(image) {
    let result = [],
        tempArr = [],
        row = 0,
        col = 0;

    while (col + 3 <= image.length) {
        while (row + 3 <= image[0].length) {
            tempArr.push(parseInt((image[col][row]+image[col][row+1]+image[col][row+2]+
                image[col+1][row]+image[col+1][row+1]+image[col+1][row+2]+
                image[col+2][row]+image[col+2][row+1]+image[col+2][row+2])/9));
            row++;
        }
        result.push(tempArr);
        col++;
        row = 0;
        tempArr = [];
    }

    return result;
}