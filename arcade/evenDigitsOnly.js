function evenDigitsOnly(n) {
    return n.toString().split('').every(x => {
        return x % 2 === 0;
    });
}