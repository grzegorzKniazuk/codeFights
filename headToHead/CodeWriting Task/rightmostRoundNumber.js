function rightmostRoundNumber(inputArray) {
    let result;
    for (let i=0,x=inputArray.length;i<x;i++) {
        if (inputArray[i] % 10 === 0) result = i;
    }
    return (result === undefined)?-1:result;
}