function isLuckyNumber(n) {
    while (n > 0) {
        var tmpDigit = n % 10;
        if (tmpDigit !== 7 && tmpDigit !== 4) {
            return  false;
        }
        n = Math.floor(n / 10);
    }
    return true;
}
