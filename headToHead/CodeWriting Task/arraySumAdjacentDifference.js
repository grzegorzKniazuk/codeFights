function arraySumAdjacentDifference(inputArray) {
    let answer = 0;
    for (let i = 1, x = inputArray.length; i < x; i++) {
        answer += Math.abs(inputArray[i] - inputArray[i - 1]);
    }
    return answer;
}