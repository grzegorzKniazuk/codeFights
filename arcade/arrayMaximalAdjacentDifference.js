function arrayMaximalAdjacentDifference(inputArray) {
    let max = 0;
    for (let i=0,x=inputArray.length;i<x;i++) {
        if(Math.abs(inputArray[i]-inputArray[i+1]) > max) max = Math.abs(inputArray[i]-inputArray[i+1]);
    }
    return max;
}