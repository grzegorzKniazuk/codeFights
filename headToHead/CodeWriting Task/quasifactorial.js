function quasifactorial(n) {
    let p = 1;
    for (let i = 2; i <= n; i++) {
        p *= i;
        p--;
    }
    return p;
}