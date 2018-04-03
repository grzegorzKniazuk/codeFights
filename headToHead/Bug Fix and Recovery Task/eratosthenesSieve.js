function eratosthenesSieve(n) {

    var primes = [],
        mayBePrime = [];
    for (var i = 0; i <= n; i++) {
        mayBePrime.push(true);
    }
    for (var i = 2; i <= n; i++) {
        if (mayBePrime[i]) {
            primes.push(i);
            for (var j = i; i * j <= n; j++) {
                mayBePrime[i * j] = primes[i];
            }
        }
    }

    return primes;
}