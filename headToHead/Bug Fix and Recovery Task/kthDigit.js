function kthDigit(n, k) {

    let numDigits = 0, number = n;
    while (number) {
        numDigits++;
        number = Math.floor(number / 10);
    }

    let indexFromLast = numDigits - k + 1;

    while (n) {
        if (--indexFromLast === 0) {
            return  n%10;
        }
        n = Math.floor(n / 10);
    }

    return -1;
}
