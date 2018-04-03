function allLongestStrings(inputArray) {

    var answer = [inputArray[0]];
    for (var i = 1; i < inputArray.length; i++) {
        if (inputArray[i].length === answer[0].length) {
            answer.push(inputArray[i]);
        }
        if (inputArray[i].length > answer[0].length) {
            answer = [inputArray[i]];
        }
    }
    return answer;
}
