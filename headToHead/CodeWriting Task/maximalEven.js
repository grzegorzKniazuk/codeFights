function maximalEven(inputArray) {

    var answer=0;
    for (let i=0,x=inputArray.length; i<x;i++) {
        if (inputArray[i]>answer && inputArray[i]%2===0) {
            answer = inputArray[i];
        }
    }
    return answer;
}
