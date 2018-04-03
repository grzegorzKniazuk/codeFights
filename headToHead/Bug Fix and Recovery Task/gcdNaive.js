function gcdNaive(a, b) {

    var gcd = 1;
    for (var divisor = 2; divisor <= Math.min(a, b); divisor++) {
        if (divisor>gcd && a%divisor===0 && b%divisor===0) {
            gcd = divisor;
        }
    }

    return gcd;
}
