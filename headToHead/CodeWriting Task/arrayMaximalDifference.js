function arrayMaximalDifference(inputArray) {
    let min = Math.min.apply(Math, inputArray),
        max = Math.max.apply(Math, inputArray);
    return max-min;
}