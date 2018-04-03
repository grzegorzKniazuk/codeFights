function palindromeRearranging(inputString) {
    let arrayString = Array.from(inputString),
        oddCounter =0, tempCounter;
    while (arrayString.length !== 0) {
        tempCounter=1;
        for (let i=1,x=arrayString.length;i<x;i++) {
            if (arrayString[0] === arrayString[i]) {
                arrayString.splice(i,1);
                i--;
                tempCounter++;
            }
        }
        if (tempCounter %2 !== 0) oddCounter++;
        arrayString.splice(0,1);
    }
    return oddCounter <= 1;
}