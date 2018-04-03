function countNeighbouringPairs(inputString) {
    let counter = 0;
    for(let i=0,x=inputString.length;i<x;i++) {
        if(inputString[i]===inputString[i+1]) counter++;
    }
    return counter;
}