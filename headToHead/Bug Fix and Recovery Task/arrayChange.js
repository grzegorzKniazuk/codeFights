function arrayChange(inputArray) {

    var result = 0;

    for (var i = 1; i < inputArray.length; i++) {
        if (inputArray[i] <= inputArray[i - 1]) {
            inputArray[i]++;
            i--;
            result++;
        }
    }
    return result;
}