function allLongestStrings(inputArray) {
    let stringLength = 0, outputArray = [];
    for (let i=0,x=inputArray.length;i<x;i++) {
        if (inputArray[i].length>stringLength) stringLength=inputArray[i].length;
    }
    for (let i=0,x=inputArray.length;i<x;i++) {
        if (inputArray[i].length===stringLength) outputArray.push(inputArray[i]);
    }
    return outputArray;
}