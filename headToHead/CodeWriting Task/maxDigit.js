function maxDigit(n) {
    let max = 0;
    while(n!==0){
        if(parseInt(n%10)>max) max=parseInt(n%10);
        parseInt(n/=10);
    }
    return max;
}