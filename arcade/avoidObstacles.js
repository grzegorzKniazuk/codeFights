function avoidObstacles(inputArray) {
    inputArray.sort(function (a,b) { return a-b; });
    let sum = 0, k=1;
    for (let i=0;i<=inputArray[inputArray.length-1];i++) {
        sum+=k;
        for (let j=0;j<inputArray.length;j++) {
            if (sum === inputArray[j]) {
                sum = 0;
                k++;
                break;
            }
        }
    }
    return k;
}