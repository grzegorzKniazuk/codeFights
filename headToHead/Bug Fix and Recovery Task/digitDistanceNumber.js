function digitDistanceNumber(n) {
    var result = 0;
    var lastDigit = n % 10;
    var tenPower = 1;
    n = Math.floor(n / 10);
    while (n) {
        result += tenPower * Math.abs(n % 10 - lastDigit);
        tenPower *= 10;
        lastDigit = n % 10;
        n = Math.floor(n / 10);
    }

    return result;
}
