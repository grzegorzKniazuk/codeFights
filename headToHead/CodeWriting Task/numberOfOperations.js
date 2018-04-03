function numberOfOperations(a, b) {
    let c = 0;
    while (a % b === 0 || b % a === 0) {
        if (a % b === 0) {
            a /= b;
        } else {
            b /= a;
        }
        c++;
    }
    return c;
}