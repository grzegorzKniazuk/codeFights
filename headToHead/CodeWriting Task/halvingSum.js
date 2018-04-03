function halvingSum(n) {
    let sum = 1;
    while (n > 1) {
        sum += n;
        n /= 2;
        n = Math.floor(n);
    }
    return sum;
}