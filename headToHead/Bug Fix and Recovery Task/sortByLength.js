function sortByLength(inputArray) {

    for (var i = 0; i < inputArray.length; i++) {
        var minIndex = i,
            tmp = inputArray[i];
        console.log(tmp);
        for (var j = i + 1; j < inputArray.length; j++) {
            if (inputArray[j].length < inputArray[minIndex].length) {
                minIndex = j;
            }
        }
        tmp = inputArray[i];
        inputArray[i]=inputArray[minIndex];
        inputArray[minIndex]=tmp;
    }

    return inputArray;
}