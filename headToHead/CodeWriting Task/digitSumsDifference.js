function digitSumsDifference(n) {
    let oddSum=0, evenSum=0;
    for(let digit, i=0,k= n.toString().length;i<k;i++) {
        digit = n%10;
        (digit%2===0)?evenSum+=digit:oddSum+=digit;
        n = parseInt(n/10);
    }
    return evenSum-oddSum;
}