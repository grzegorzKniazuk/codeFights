function rotateImage(a) {
    let result = [], tempArray = [];
    for (let i = 0; i < a.length; i++) {
        for (let j = a.length-1; j >= 0; j--) {
            tempArray.push(a[j][i]);
        }
        result.push(tempArray);
        tempArray = [];
    }
    return result;
}