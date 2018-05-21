function arrayReplace(inputArray, elemToReplace, substitutionElem) {
    return inputArray.map(x => {
        return (x === elemToReplace)?substitutionElem:x;
    });
}