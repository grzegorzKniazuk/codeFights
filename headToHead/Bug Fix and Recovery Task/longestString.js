function longestString(inputArray) {

    var answer = inputArray[0];
    for (var i = 1; i < inputArray.length; i++) {
        if (inputArray[i].length > answer.length) {
            answer = inputArray[i];
        }
    }
    return answer;
}
