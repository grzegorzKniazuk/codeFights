function removeDuplicateStrings(inputArray) {
    var result = [];
    for (i = 0; i < inputArray.length; i++) {
        if(inputArray[i] === inputArray[i + 1]) {
            continue;
        }
        result.push(inputArray[i]);
    }
    return result;
}
