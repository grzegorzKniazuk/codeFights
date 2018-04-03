function extractEachKth(inputArray, k) {
    return k = inputArray.filter((v, i) => ((i + 1) % k) !== 0);
}