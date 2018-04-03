function arrayChange(inputArray) {
    let count=0;
    for (let i=0, x=inputArray.length;i<x;i++) {
        while (inputArray[i] >= inputArray [i+1]) {
            inputArray[i+1] = inputArray[i+1]+1;
            count++;
        }
    }
    return count;
}