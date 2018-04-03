function fibonacciSum(n) {

    var fib = [];
    var fib0 = 1;
    var fib1 = 1;
    fib.push(fib1);
    while (fib1 < n) {
        var fib2 = fib0 + fib1;
        fib.push(fib2);
        fib0 = fib1;
        fib1 = fib2;
    }

    var ans = [];
    for (var i = fib.length - 1; i >= 0; i--) {
        if (n >= fib[i]) {
            n -= fib[i];
            ans.push(fib[i]);
        }
    }

    return ans.reverse();
}