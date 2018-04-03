function addDigits(a, b, n) {

    var rem = a % b;

    var result = [];
    result.push(a.toString());

    for (var i = 0; i < n; i++) {
        var best = -1;
        for (var digit = 9;digit >= 0; digit--) {
            if ((rem * 10 + digit) % b === 0) {
                best = digit;
                break;
            }
        }
        if (best === -1) {
            break;
        }
        result.push(best.toString());
        rem = (rem * 10 + best) % b;
    }

    return result.join('');
}
