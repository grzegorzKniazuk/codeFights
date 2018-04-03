function evenDigitsOnly(n) {
    if (n === 0) return true;
    if (n % 2 !== 0) return false;
    return evenDigitsOnly(Math.floor(n / 10));
}
